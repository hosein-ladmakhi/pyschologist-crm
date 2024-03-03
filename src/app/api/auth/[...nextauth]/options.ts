import { ILoginRequestBody } from '@/types/auth.type';
import { loginMutationApi } from '@/services/auth';
import { AuthOptions } from 'next-auth';
import NextAuthCredentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    NextAuthCredentials({
      type: 'credentials',
      credentials: {
        phone: { type: 'string' },
        password: { type: 'string' },
        type: { type: 'string' },
      },
      async authorize(data?: ILoginRequestBody) {
        const response = await loginMutationApi(data as ILoginRequestBody);
        return response?.token
          ? {
              ...response,
              accessToken: response.token,
              id: response?.user?.id! as any,
            }
          : null;
      },
    }),
  ],
  pages: { signIn: '/auth/login' },
  callbacks: {
    jwt: ({ user, token, session }: any) => {
      if (session) token.user = { ...session };
      if (user) return { ...(user || {}), ...(token || {}) };
      return { ...token };
    },
    async session({ session, token }: any) {
      if (token?.user) {
        session.user = token.user;
        session.accessToken = token.accessToken;
      }
      return session;
    },
    redirect(params) {
      return `${params.baseUrl}/auth/login`;
    },
  },
};

import { AuthOptions } from 'next-auth';
import NextAuthCredentials from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  secret: 'xxx',
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
      async authorize(credentials: any, req) {
        const { type, ...data } = credentials as {
          phone: string;
          password: string;
          type: string;
        };
        const response = await fetch(
          `http://localhost:4000/auth/login/${type}`,
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const responseJSON = await response.json();
        return responseJSON?.token
          ? { ...responseJSON, accessToken: responseJSON?.token }
          : null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ user, token }: any) => {
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
  },
};

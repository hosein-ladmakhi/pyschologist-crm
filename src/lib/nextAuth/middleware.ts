import { withAuth } from "next-auth/middleware";
import { jwtDecode } from "jwt-decode"

const checkTokenExp = (token?: string) => {
    if (!token) return false;
    const decodedToken = jwtDecode(token)
    console.log('first', decodedToken, token)
    if (!decodedToken.exp) return false;
    return new Date().getTime() <= decodedToken.exp * 1000
}


export const protectedMiddleware = withAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        authorized(params: any) {
            return params.token?.accessToken ? checkTokenExp(params.token?.accessToken) : false
        },
    },
});

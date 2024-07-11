
import authConfig from "./auth.config"
import NextAuth from "next-auth"

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
import {default_login_redirect, default_loggedin_redirect,  apiAuthPrefix, authRoutes, publicRoutes} from '@/routes' 

export default auth((req) => {
    const isLoggedin = !!req.auth;
    const {nextUrl} = req;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    
    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedin) {
            return Response.redirect(new URL(default_loggedin_redirect, nextUrl));
        }
        return null;
    }

    if (!isLoggedin && !isPublicRoute) {
        return Response.redirect(new URL(default_login_redirect, nextUrl));
    }
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
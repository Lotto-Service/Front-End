import { NextResponse } from "next/server";
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from "./route";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;

    const { pathname } = req.nextUrl;
    if (token) {
      if (PUBLIC_ROUTE.includes(pathname)) {
        if (pathname.startsWith("/") || pathname.startsWith("/signUp")) {
          return NextResponse.redirect(new URL("/Main", req.url));
        }
      }
    } else {
      if (pathname !== "/" && pathname !== "/signUp") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    if (PRIVATE_ROUTE.includes(pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

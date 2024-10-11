import { NextResponse } from "next/server";
import { PAGE_ROUTE, PRIVATE_ROUTE, PUBLIC_ROUTE } from "./route";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;

    const { pathname } = req.nextUrl;
    console.log("toke ", token);
    if (token?.data) {
      if (PUBLIC_ROUTE.includes(pathname) || !PAGE_ROUTE.includes(pathname)) {
        return NextResponse.redirect(new URL("/Main", req.url));
      }
    } else {
      if (!PUBLIC_ROUTE.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
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

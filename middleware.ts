import { NextResponse } from "next/server";
import { PAGE_ROUTE, PUBLIC_ROUTE } from "./route";
import { withAuth } from "next-auth/middleware";
import { pages } from "next/dist/build/templates/app-page";
import { cookies } from "next/headers";

export default withAuth(
  async function middleware(req) {
    const cookieStore = cookies();
    console.log("cookie store", cookieStore);
    const cookiesHeader = req.headers.get("cookie");
    if (!cookiesHeader) return;
    const cookiesArray: [string, string][] = cookiesHeader
      ?.split("; ")
      .map((cookie) => {
        const [key, value] = cookie.split("=");
        return [key, value];
      });

    const cookie = new Map(cookiesArray).get("next-auth.session-token");
    const pathname = req.nextUrl.pathname;

    if (pathname === "/" && !cookie) {
      return NextResponse.redirect(new URL("/signIn", req.url));
    }
    if (cookie) {
      if (PUBLIC_ROUTE.includes(pathname) || !PAGE_ROUTE.includes(pathname)) {
        return NextResponse.redirect(new URL("/main", req.url));
      }
    } else {
      if (!PUBLIC_ROUTE.includes(pathname) && pathname !== "/signIn") {
        return NextResponse.redirect(new URL("/signIn", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/signIn",
    },
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

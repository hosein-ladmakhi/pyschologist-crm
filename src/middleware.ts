import { headers } from "next/headers";
import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";
import { withAuth } from "next-auth/middleware";

const protectedRoute = ["/dashboard", "/tickets"];

const protectedMiddleware = withAuth({});

const withPlatform = (handler) => {
  return (request: NextRequest) => {
    const isMobilePlatform = userAgent({ headers: headers() }).device.type === "mobile";
    const desktopPageURL = "/main-operation";
    const currentURL = request.nextUrl.pathname;
    if (
      isMobilePlatform &&
      currentURL !== desktopPageURL &&
      !currentURL.startsWith("/_next") &&
      !currentURL.startsWith("/api")
    ) {
      console.log(454, currentURL);
      return NextResponse.rewrite(new URL(desktopPageURL, request.url), {
        status: 303,
      });
    }
    return handler(request);
  };
};

const withNextAuth = () => {
  return (request: NextRequest, ev: NextFetchEvent) => {
    const currentURL = request.nextUrl.pathname;
    if (protectedRoute.includes(currentURL)) {
      return protectedMiddleware(request as any, ev);
    }
    return NextResponse.next();
  };
};

export default withPlatform(withNextAuth());

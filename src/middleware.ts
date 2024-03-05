import { headers } from "next/headers";
import { NextFetchEvent, NextRequest, NextResponse, userAgent } from "next/server";
import { withAuth } from "next-auth/middleware";

const protectedRoute = ["/dashboard", "/tickets"];

const routes = ["/dashboard", "/tickets", "/categories", "/therapists"];

const protectedMiddleware = withAuth({});

const withPlatform = (handler) => {
  return (request: NextRequest) => {
    const isMobilePlatform = userAgent({ headers: headers() })?.ua?.match(
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
    );
    const desktopPageURL = "/main-operation";
    const currentURL = request.nextUrl.pathname;
    if (
      !isMobilePlatform &&
      currentURL !== desktopPageURL &&
      (routes.find((element) => element.startsWith(currentURL) && currentURL !== "/") ||
        currentURL === "/")
    ) {
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

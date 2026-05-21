import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ PANTRIX MIDDLEWARE
// Back/forward arrow pe bfcache disable karna zaroori hai
// Chrome bfcache use karta hai — page freeze ho jaata hai
// Cache-Control: no-store se bfcache kaam nahi karta
// → Back/forward pe hamesha fresh server request jaayegi

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  // ✅ bfcache disable karo — Chrome "no-store" dekh ke bfcache skip karta hai
  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("Surrogate-Control", "no-store");

  return response;
}

export const config = {
  matcher: [
    // ✅ Sare HTML pages cover karo
    // Static files, images, fonts exclude kiye hain (unhe cache rehna chahiye)
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|css|js)$).*)",
  ],
};

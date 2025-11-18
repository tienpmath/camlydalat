// export { auth as middleware } from "./auth"
import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth(async function middleware(req) {
  const user = req.auth?.user;

  console.log("🔐 Middleware user:", user);

  if (!user) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

//   if (user?.role !== "admin") {
//     return NextResponse.redirect(new URL("/403", req.url));
//   }
});

export const config = {
  matcher: ["/admin/:path*"],
};

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/", // Allow unauthenticated access to homepage
    "/products(.*)", // Allow public product pages
    "/api/public/(.*)", // Example public API path
  ],
});

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - static files (_next, assets, etc.)
     * - public files (e.g. .png, .css)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

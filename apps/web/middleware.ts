import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";


// For now ignored, waiting for new Next.js version
// https://github.com/vercel/next.js/issues/42921
export default withMiddlewareAuthRequired();

export const config = {
  matcher: ["/admin"],
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel uses its own Next.js output; standalone is for Docker/self-host. */
  allowedDevOrigins: ["3000-" + (process.env.BASE44_PUBLIC_HOST_SUFFIX ?? "")],
};

export default nextConfig;

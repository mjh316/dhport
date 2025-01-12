import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
  images: {
    domains: ["www.projectgreen.world", "joincpi.org", "www.cerealcodes.org"],
  },
};

export default nextConfig;

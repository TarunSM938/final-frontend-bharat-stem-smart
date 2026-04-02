// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["developers.google.com", "127.0.0.1", "localhost"],
  },
};

export default nextConfig;
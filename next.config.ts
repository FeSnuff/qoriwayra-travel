import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guru-almacen.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/quechua/**",
      },
    ],
  },
};

export default nextConfig;
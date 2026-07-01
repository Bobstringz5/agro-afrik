import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/image-photo/**",
      },
      {
        protocol: "https",
        hostname: "image.shutterstock.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

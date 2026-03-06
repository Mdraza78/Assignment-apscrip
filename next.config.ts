import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Remove output: 'export'
  trailingSlash: true,
};

export default nextConfig;
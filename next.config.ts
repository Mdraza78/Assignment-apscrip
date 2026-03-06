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
  output: 'export', // Add this
  trailingSlash: true,
};

export default nextConfig;
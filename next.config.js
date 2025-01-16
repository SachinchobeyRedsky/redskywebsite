/** @type {import('next').NextConfig} */
const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compress: false,
  async redirects() {
    return [
      {
        source: '/training/',
        destination: '/industrial-training/',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai", // Specify the image loader, replace 'akamai' with the appropriate loader
    path: "", // Specify the path for the loader
    optimizeFonts: false,
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=3600', // Cache images for 1 hour
    },
  ],
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  rules: {
    "react/display-name": "off",
  },
  webpack: (config, { isServer }) => {
    // Add the CompressionPlugin to the webpack configuration
    if (!isServer) {
      config.plugins.push(new CompressionPlugin());
    }

    return config;
  },
  async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap',
            },
        ];
    },
});
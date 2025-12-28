/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  serverExternalPackages: ["@xenova/transformers"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

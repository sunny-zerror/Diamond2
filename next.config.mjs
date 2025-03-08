const nextConfig = {
  experimental: {
    turbo: true, // Enable Next.js Turbo Pack
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: false,
  swcMinify: true,
};

export default nextConfig;

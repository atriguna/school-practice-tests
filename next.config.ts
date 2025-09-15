import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ⛔ kalau mau API routes, ganti jadi "standalone"
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

console.log(
  "✅ NEXT Build sees DEEPSEEK_KEY:",
  process.env.DEEPSEEK_KEY ? "SET" : "MISSING"
);

export default nextConfig;

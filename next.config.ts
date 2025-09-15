// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

console.log("✅ NEXT Build sees DEEPSEEK_KEY:", process.env.DEEPSEEK_KEY ? "SET" : "MISSING");

export default nextConfig;

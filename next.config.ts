import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript 빌드 에러가 있어도 배포를 강제로 진행합니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint 빌드 에러가 있어도 배포를 강제로 진행합니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

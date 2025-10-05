const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'docs', // ✅ 빌드 결과를 docs에
};
export default nextConfig;
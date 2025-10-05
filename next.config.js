const repoName = 'Tail418.github.io';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'docs', // ✅ 빌드 결과를 docs에
  basePath: `/${repoName}`,       // ✅ GitHub Pages용 경로 설정
  assetPrefix: `/${repoName}/`, 
};
export default nextConfig;
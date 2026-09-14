/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = process.env.NEXT_OUTPUT === "export";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "learning-platform";

const nextConfig = {
  ...((isGithubPages || isStaticExport) && {
    output: "export",
    basePath: `/${repository}`,
    assetPrefix: `/${repository}/`,
    images: { unoptimized: true },
  }),
};

export default nextConfig;

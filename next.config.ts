import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/wenmai",
        assetPrefix: "/wenmai/",
        trailingSlash: true,
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;

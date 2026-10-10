import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Calculator widgets may be iframed by any site (backlink programme). The rest of the site is unchanged.
    return [{ source: "/embed/:slug", headers: [{ key: "Content-Security-Policy", value: "frame-ancestors *" }] }];
  },
};

export default nextConfig;

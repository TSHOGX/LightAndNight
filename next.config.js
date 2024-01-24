/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wx4.sinaimg.cn",
        port: "",
        pathname: "/large/**",
      },
      {
        protocol: "https",
        hostname: "wx3.sinaimg.cn",
        port: "",
        pathname: "/large/**",
      },
      {
        protocol: "https",
        hostname: "wx3.sinaimg.cn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wx2.sinaimg.cn",
        port: "",
        pathname: "/large/**",
      },
      {
        protocol: "https",
        hostname: "wx1.sinaimg.cn",
        port: "",
        pathname: "/large/**",
      },
    ],
  },
};

export default config;

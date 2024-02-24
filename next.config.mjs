/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/TSHOGX/data/main/processor/media/**/**",
      },
      {
        protocol: "https",
        hostname: "**.sinaimg.cn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "f.video.weibocdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

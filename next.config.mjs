/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.NEXT_PUBLIC_GATEWAY_URL,
                port: "",
                pathname: "/files/**",
            },
        ],
    }
};

export default nextConfig;

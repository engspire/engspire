/** @type {import('next').NextConfig} */

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        domains: ["img.clerk.com"]
    },
    async redirects() {
        return [
            {
                source: "/fees",
                destination: "/payments",
                permanent: true,
            },
            {
                source: "/engreesi",
                destination: "https://engreesi.engspire.lk",
                permanent: true,
            }
        ]
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    /**
     * NOTE:
     * Disable the following lines when deploying to Vercel.
     * These are required only when deploying static HTML to Firebase Hosting.
     */
    // output: 'export',
    // images: { unoptimized: true }
}

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = process.env.NODE_ENV === "production" ? withPWA(nextConfig) : nextConfig;

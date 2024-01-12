/** @type {import('next').NextConfig} */

// const nextConfig = {}  the original
const nextConfig = {
    async rewrites() {
        // console.log(process.env.NEXT_PUBLIC_SERVER_URL);
        return [
        {
            source: '/api/:path*',
            destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`,
        },
        ];
    },
};
module.exports = nextConfig

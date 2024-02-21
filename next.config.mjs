/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.freepik.com',
                protocol: 'https'
            },
            {
                hostname: 'encrypted-tbn0.gstatic.com',
                protocol: 'https'
            },
            {
                hostname: "file.drsaina.com",
                protocol: "https"
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;

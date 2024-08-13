/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '64.227.170.194',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '192.168.10.185',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;

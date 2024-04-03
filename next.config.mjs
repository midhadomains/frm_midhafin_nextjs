/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.midhafin.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;

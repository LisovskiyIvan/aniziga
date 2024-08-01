/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.myanimelist.net',
            port: '',
            pathname: '/images/anime/**'
        }]
    }
};

export default nextConfig;

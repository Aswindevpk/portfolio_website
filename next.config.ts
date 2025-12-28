/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aswindev.in',
          },
        ],
        destination: 'https://aswindev.in/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

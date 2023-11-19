module.exports = {    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apollographql.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seb-awesome-links.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  reactStrictMode: true,
};

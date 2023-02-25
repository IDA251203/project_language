/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en' , 'uz' , 'ru'] ,
    defaultLocale: 'uz'
  },
}

module.exports = nextConfig

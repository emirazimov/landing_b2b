const CompressionPlugin  = require("compression-webpack-plugin")

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    isrMemoryCacheSize: 0,
    appDir: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  plugins: [
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$|\.ts$|\.tsx$/,
    }),
  ]
}

module.exports = nextConfig

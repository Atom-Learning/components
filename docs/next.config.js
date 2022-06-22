const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // without this we get
    // ./node_modules/@babel/core/lib/transformation/normalize-file.js:9:0
    // Module not found: Can't resolve 'fs'
    // null
    // as a result of next-mdx-remote
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    if (isServer) {
      config.externals = ['react', ...config.externals]
    }

    config.resolve.alias['react'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react'
    )

    config.resolve.alias['react-dom'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react-dom'
    )

    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/overview/introduction',
        permanent: false
      }
    ]
  }
})

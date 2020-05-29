// const withOffline = require('next-offline')
const withImages = require('next-images')

module.exports = withImages({
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
})


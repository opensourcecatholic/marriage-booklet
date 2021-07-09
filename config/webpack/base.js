const { webpackConfig } = require('@rails/webpacker')
const { merge } = require('webpack-merge')
const erbLoader = require('./loaders/erb')

const customConfig = {
    resolve: {
        extensions: ['.css']
    }
}

module.exports = merge(webpackConfig, customConfig)

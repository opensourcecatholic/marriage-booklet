const { webpackConfig } = require('@rails/webpacker')
const { merge } = require('webpack-merge')
const erbLoader = require('./loaders/erb')
const webpack = require('webpack')

const customConfig = {
    resolve: {
        extensions: ['.js','.js.erb','.css','.scss','.json','.svg','.png','.jpg','.jpeg','.gif']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery/src/jquery',
            jQuery: 'jquery/src/jquery',
        })
    ]
}

console.log(JSON.stringify(merge(webpackConfig, erbLoader, customConfig), undefined, 2))

module.exports = merge(webpackConfig, erbLoader, customConfig)

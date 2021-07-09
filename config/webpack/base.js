const { webpackConfig } = require('@rails/webpacker')
const { merge } = require('webpack-merge')
const erbLoader = require('./loaders/erb')
const webpack = require('webpack')
//const path = require('path');

const customConfig = {
    resolve: {
        extensions: ['.css','.svg','.png','.jpg','.jpeg','.gif','.js.erb'],
        /*alias: {
            //$: 'jquery/src/jquery',
            //jQuery: 'jquery/src/jquery'
            //src: path.resolve(__dirname, '../../app/packs/src/')
        }*/
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery/src/jquery',
            jQuery: 'jquery/src/jquery',
        })
    ]
}

//environment.loaders.prepend('erb', erb)

/*
function hotfixPostcssLoaderConfig(subloader) {
    const subloaderName = subloader.loader
    if (subloaderName === 'postcss-loader') {
      subloader.options.postcssOptions = subloader.options.config
      delete subloader.options.config
    }
}

environment.loaders.keys().forEach(loaderName => {
const loader = environment.loaders.get(loaderName)
loader.use.forEach(hotfixPostcssLoaderConfig)
})
*/

module.exports = merge(webpackConfig, erbLoader, customConfig)

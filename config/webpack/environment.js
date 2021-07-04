const { environment } = require('@rails/webpacker')
const erb = require('./loaders/erb')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery',
        jQuery: 'jquery/dist/jquery',
        I18n: 'i18n-js/app/assets/javascripts/i18n'
    })
)

environment.loaders.prepend('erb', erb)
module.exports = environment

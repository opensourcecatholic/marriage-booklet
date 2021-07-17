// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all"
import "stylesheets/application"
import('i18n-js').then(({default: I18n}) => {
    try {
      if (typeof window.I18n.defaultLocale === "string") {
        I18n.defaultLocale = window.I18n.defaultLocale
      }
    } catch (e) {
      // Do nothing
    }
    try {
      if (typeof window.I18n.locale === "string") {
        I18n.locale = window.I18n.locale
      }
    } catch (e) {
      // Do nothing
    }
    window.I18n = I18n
})
import('src/translations').then(() => {
    window.I18n.translations = I18n.translations;
    console.log(I18n.t('pages.home.helloWorldFrom', { name: 'Application JS' }));
    console.log(window.I18n.t('pages.home.helloWorldFrom', { name: 'Application JS' }));
})

Rails.start()
Turbolinks.start()
ActiveStorage.start()

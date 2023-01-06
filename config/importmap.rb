# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "jquery", to: "https://ga.jspm.io/npm:jquery@3.6.3/dist/jquery.js"
pin "@fortawesome/fontawesome-free", to: "https://ga.jspm.io/npm:@fortawesome/fontawesome-free@6.2.1/js/fontawesome.js"
pin "@fortawesome/fontawesome-svg-core", to: "https://ga.jspm.io/npm:@fortawesome/fontawesome-svg-core@6.2.1/index.mjs"
pin "@fortawesome/free-brands-svg-icons", to: "https://ga.jspm.io/npm:@fortawesome/free-brands-svg-icons@6.2.1/index.mjs"
pin "@fortawesome/free-regular-svg-icons", to: "https://ga.jspm.io/npm:@fortawesome/free-regular-svg-icons@6.2.1/index.mjs"
pin "@fortawesome/free-solid-svg-icons", to: "https://ga.jspm.io/npm:@fortawesome/free-solid-svg-icons@6.2.1/index.mjs"
pin "i18n-js", to: "https://ga.jspm.io/npm:i18n-js@4.2.2/dist/import/index.js"
pin "bignumber.js", to: "https://ga.jspm.io/npm:bignumber.js@9.1.1/bignumber.mjs"
pin "lodash/camelCase", to: "https://ga.jspm.io/npm:lodash@4.17.21/camelCase.js"
pin "lodash/flattenDeep", to: "https://ga.jspm.io/npm:lodash@4.17.21/flattenDeep.js"
pin "lodash/get", to: "https://ga.jspm.io/npm:lodash@4.17.21/get.js"
pin "lodash/has", to: "https://ga.jspm.io/npm:lodash@4.17.21/has.js"
pin "lodash/isArray", to: "https://ga.jspm.io/npm:lodash@4.17.21/isArray.js"
pin "lodash/isObject", to: "https://ga.jspm.io/npm:lodash@4.17.21/isObject.js"
pin "lodash/range", to: "https://ga.jspm.io/npm:lodash@4.17.21/range.js"
pin "lodash/repeat", to: "https://ga.jspm.io/npm:lodash@4.17.21/repeat.js"
pin "lodash/set", to: "https://ga.jspm.io/npm:lodash@4.17.21/set.js"
pin "lodash/sortBy", to: "https://ga.jspm.io/npm:lodash@4.17.21/sortBy.js"
pin "lodash/uniq", to: "https://ga.jspm.io/npm:lodash@4.17.21/uniq.js"
pin "lodash/zipObject", to: "https://ga.jspm.io/npm:lodash@4.17.21/zipObject.js"
pin "@rails/ujs", to: "https://ga.jspm.io/npm:@rails/ujs@7.0.4/lib/assets/compiled/rails-ujs.js"

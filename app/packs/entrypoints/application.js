import "@fortawesome/fontawesome-free/css/all"
import 'jquery-ujs'
import I18n from 'i18n-js'
window.I18n = I18n

//console.log(coverSvg);
const importAll = r => {
    r.keys().forEach(r);
}

importAll(require.context('../images/', true, /\.(svg|jpg)$/));
//require.context('../images', true)
class ApplicationController < ActionController::Base
  def default_url_options
    { locale: I18n.locale }
  end

  around_action :switch_locale

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end
end

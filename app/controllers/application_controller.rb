class ApplicationController < ActionController::Base
  # app/controllers/application_controller.rb
  def default_url_options
    { locale: I18n.locale }
  end
end

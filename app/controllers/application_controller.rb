class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :basic_auth


  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name amount])
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER_CC"] && password == ENV["BASIC_AUTH_PASSWORD_CC"]
    end
  end

end

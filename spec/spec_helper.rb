ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

require 'rspec/rails'

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.global_fixtures = :all
end

def login_as(user)
  remember_token = User.new_remember_token
  cookies.permanent[:remember_token] = remember_token
  user.update_attribute(:remember_token, User.digest(remember_token))
end

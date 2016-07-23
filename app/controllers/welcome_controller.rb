class WelcomeController < ApplicationController

  before_filter :require_login, only: :index

end

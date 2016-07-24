class WelcomeController < ApplicationController

  def index
    respond_to do |format|
      format.html {}
      format.json do
        if current_user
          render json: current_user
        else
          render json: {}
        end
      end
    end
  end

end

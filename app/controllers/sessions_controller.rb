class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:session][:email].downcase)

    respond_to do |format|
      format.json do
        if user && user.authenticate(params[:session][:password])
          sign_in user
          render json: { success: true, user_id: user.id }
        else
          render json: { success: false }
        end
      end
    end
  end

  def destroy
    respond_to do |format|
      format.json do
        sign_out
        render json: { success: true }
      end
    end
  end

end

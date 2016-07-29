class PracticesController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        practices = current_user ? current_user.practices : []
        render json: practices
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        practice = Practice.create!(practice_params)
        render json: practice
      end
    end
  end

private

  def practice_params
    params.require(:practice).permit(:name, :total_time)
  end

end

class PracticesController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        practices = current_user ? current_user.practices : []

        render json: practices
      end
    end
  end

  def update
    respond_to do |format|
      format.json do
        practice = Practice.find(params[:id])
        practice.update!(practice_params)

        render json: practice
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        practice = Practice.create!(practice_params.merge(user_id: current_user.id))

        render json: practice
      end
    end
  end

  def destroy
    respond_to do |format|
      format.json do
        practice = Practice.find(params[:id])
        drills = Drill.where(practice_id: params[:id])

        practice.destroy
        drills.destroy_all

        render json: { deleted_practice: practice.id }
      end
    end
  end

private

  def practice_params
    params.require(:practice).permit(:name, :total_time, :user_id)
  end

end

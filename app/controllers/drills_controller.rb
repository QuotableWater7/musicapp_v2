class DrillsController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        drills = Drill.where(practice_id: params[:drills][:practice_id])
        render json: drills
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        drill = Drill.create!(drill_params)
        render json: drill
      end
    end
  end

private

  def drill_params
    params.require(:drill).permit(:practice_id, :name, :weight, :weekday)
  end

end

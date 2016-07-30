class DrillsController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        drills = Drill.where(drills_params)
        render json: drills
      end
    end
  end

  def update
    respond_to do |format|
      format.json do
        drill = Drill.find(params[:id])
        drill.update!(drill_params)

        render json: drill
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

  def drills_params
    params.require(:drills).permit(:practice_id, :name, :weight, :weekday)
  end

  def drill_params
    params.require(:drill).permit(:practice_id, :name, :weight, :weekday)
  end

end
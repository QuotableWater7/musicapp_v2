class DrillsController < ApplicationController

  def index
    respond_to do |format|
      format.json do
        drills = Drill.where(practice_id: params[:drills][:practice_id])
        render json: drills
      end
    end
  end

end

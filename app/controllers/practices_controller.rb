class PracticesController < ApplicationController

  def show
    respond_to do |format|
      format.json do
        current_id = 1
        data = {
          current_id => { title: 'Drill One', weight: 50, id: current_id },
          (current_id += 1) => { title: 'Drill Two', weight: 50, id: current_id },
          (current_id += 1) => { title: 'Drill Three', weight: 50, id: current_id },
          (current_id += 1) => { title: 'Drill Four', weight: 50, id: current_id },
          (current_id += 1) => { title: 'Drill Five', weight: 50, id: current_id }
        }
        render status: :ok, json: { drills: data }
      end
    end
  end

end

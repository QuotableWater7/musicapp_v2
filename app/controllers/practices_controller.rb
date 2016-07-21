class PracticesController < ApplicationController

  def show
    respond_to do |format|
      format.json do
        current_id = 1
        data = {
          current_id => { title: 'Drill One', weight: default_weight, id: current_id },
          (current_id += 1) => { title: 'Drill Two', weight: default_weight, id: current_id },
          (current_id += 1) => { title: 'Drill Three', weight: default_weight, id: current_id },
          (current_id += 1) => { title: 'Drill Four', weight: default_weight, id: current_id },
          (current_id += 1) => { title: 'Drill Five', weight: default_weight, id: current_id }
        }
        render json: data
      end
    end
  end

end

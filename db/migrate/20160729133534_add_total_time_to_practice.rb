class AddTotalTimeToPractice < ActiveRecord::Migration[5.0]

  def change
    add_column :practices, :total_time, :integer
  end

end

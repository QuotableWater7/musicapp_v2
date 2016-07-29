class CleanUpBadIds < ActiveRecord::Migration[5.0]

  def change
    remove_index :drills, :drills_id
    remove_column :drills, :drills_id

    remove_index :practices, :practices_id
    remove_column :practices, :practices_id
  end

end

class AddPracticesAndDrillsTables < ActiveRecord::Migration[5.0]

  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
    end

    create_table :practices do |t|
      t.string :name
      t.references :practices, :user, index: true
    end

    create_table :drills do |t|
      t.string :name
      t.string :weekday
      t.integer :weight
      t.references :drills, :practice, index: true
    end
  end

end

class Drill < ActiveRecord::Base

  belongs_to :practice
  has_one :user, through: :practice

end

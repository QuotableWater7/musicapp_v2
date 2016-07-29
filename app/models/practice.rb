class Practice < ActiveRecord::Base

  belongs_to :user
  has_many :drills

end

class Car < ActiveRecord::Base
  validates :make, :model, :year, presence: true
end

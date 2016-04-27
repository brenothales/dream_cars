class Car < ActiveRecord::Base
  validates :make, :model, :year, presence: true
  validates :year, uniqueness: { scope: [:make, :model] }
end

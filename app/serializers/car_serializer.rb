class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year
end

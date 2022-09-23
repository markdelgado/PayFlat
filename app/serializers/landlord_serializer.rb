class LandlordSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :properties
  has_many :units, through: :properties
end

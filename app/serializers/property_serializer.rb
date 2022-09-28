class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :unit_count, :landlord_id, :units

  belongs_to :landlord
end

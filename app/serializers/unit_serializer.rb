class UnitSerializer < ActiveModel::Serializer
  attributes :id, :bath, :bed, :lease_start_date, :lease_end_date, :price, :property_id, :sqft, :tenant_id, :vacant

  
end

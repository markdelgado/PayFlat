class TenantSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user 
  belongs_to :unit

 
end
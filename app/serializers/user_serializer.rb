class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest

  has_many :tenant
  has_many :landlord, serializer: LandlordSerializer
end

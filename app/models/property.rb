class Property < ApplicationRecord
    has_many :units
    has_many :tenants, through: :units
    belongs_to :landlord

end

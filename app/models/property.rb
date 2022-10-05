class Property < ApplicationRecord
    has_many :units, dependent: :destroy
    # has_many :tenants, through: :units
    belongs_to :landlord


end

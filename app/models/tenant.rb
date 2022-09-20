class Tenant < ApplicationRecord
    has_many :complaints
    has_one :unit
    belongs_to :user
end

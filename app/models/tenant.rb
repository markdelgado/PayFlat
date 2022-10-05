class Tenant < ApplicationRecord
    has_many :complaints
    belongs_to :unit
    belongs_to :user
end

class Unit < ApplicationRecord
    has_one :tenant
    belongs_to :property
end

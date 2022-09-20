class User < ApplicationRecord
    has_many :landlords
    has_many :tenants

end

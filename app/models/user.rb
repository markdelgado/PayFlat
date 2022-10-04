class User < ApplicationRecord
    has_secure_password
    has_one :landlord
    has_one :tenant

    

end

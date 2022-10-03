class User < ApplicationRecord
    has_one :landlord
    has_one :tenant

    

end

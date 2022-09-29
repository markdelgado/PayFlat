class User < ApplicationRecord
    has_secure_password 
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :password_digest, presence: true

    has_many :landlords
    has_many :tenants

end

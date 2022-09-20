class Landlord < ApplicationRecord
    has_many :properties
    has_many :units, through: :properties
    has_many :complaints
    belongs_to :user
end

class Complaint < ApplicationRecord
    belongs_to :landlord
    belongs_to :tenant
end

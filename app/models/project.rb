class Project < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :wedding_party_members, dependent: :delete_all
  enum liturgy: { withMass: 0, withoutMass: 1, catholicNonCatholic: 2 }, _prefix: true
end

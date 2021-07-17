class Project < ApplicationRecord
  has_and_belongs_to_many :users
  enum liturgy: { withMass: 0, withoutMass: 1, catholicNonCatholic: 2 }, _prefix: true
end

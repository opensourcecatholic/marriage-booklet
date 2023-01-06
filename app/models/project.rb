class Project < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :wedding_party_members, dependent: :delete_all
  enum liturgy: { withMass: 0, withoutMass: 1, catholicNonCatholic: 2 }, _prefix: true
  scope :orphaned, -> {
    left_outer_joins(:users)
    .where(projects_users: { project_id: nil })
  }
  accepts_nested_attributes_for :users, :wedding_party_members, allow_destroy: true
end

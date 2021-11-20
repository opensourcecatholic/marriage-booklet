class User < ApplicationRecord
  has_and_belongs_to_many :projects
  enum role: { bride: 0, groom: 1, celebrant: 2, guest: 3 }, _prefix: true
  has_secure_password
  scope :not_in_any_project, -> {
    left_outer_joins(:projects)
    .where(projects_users: { user_id: nil })
  }

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, length: { in: 6..25 }, confirmation: true, on: :create
  validates :password, length: { in: 6..25 }, confirmation: true, on: :update, if: :password_digest_changed?
  validates_confirmation_of :password
  validates :password_confirmation, presence: true, on: :create
  validates :password_confirmation, presence: true, on: :update, if: :password_digest_changed?
end

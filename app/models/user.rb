class User < ApplicationRecord
  has_and_belongs_to_many :projects
  enum role: { bride: 0, groom: 1, celebrant: 2, guest: 3 }, _prefix: true
  has_secure_password
end

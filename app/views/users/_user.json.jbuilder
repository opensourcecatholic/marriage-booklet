json.extract! user, :id, :username, :email, :role, :avatar, :password_digest, :created_at, :updated_at
json.url user_url(user, format: :json)

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :username
      t.string :email
      t.integer :role
      t.string :avatar
      t.string :password_digest

      t.timestamps
    end
  end
end

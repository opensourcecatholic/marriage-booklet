class CreateWeddingPartyMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :wedding_party_members, id: :uuid do |t|
      t.string :firstName
      t.string :lastName
      t.integer :role
      t.integer :relationship
      t.string :relationshipTo
      t.references :project, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end

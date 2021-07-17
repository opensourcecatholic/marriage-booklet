class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects, id: :uuid do |t|
      t.integer :liturgy
      t.datetime :weddingdate
      t.string :church
      t.string :city
      t.string :celebrantNamePrefix
      t.string :celebrantFirstName
      t.string :celebrantLastName
      t.string :brideFirstName
      t.string :brideLastName
      t.string :groomFirstName
      t.string :groomLastName
      t.boolean :isSecured, :null => false, :default => 0

      t.timestamps
    end
  end
end

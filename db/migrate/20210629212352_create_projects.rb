class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.integer :liturgy
      t.string :brideFirstName
      t.string :brideLastName
      t.string :groomFirstName
      t.string :groomLastName
      t.string :celebrantNamePrefix
      t.string :celebrantFirstName
      t.string :celebrantLastName
      t.string :church
      t.string :city
      t.datetime :weddingdate

      t.timestamps
    end
  end
end

class AddNamePrefixToWeddingPartyMember < ActiveRecord::Migration[7.0]
  def change
    add_column :wedding_party_members, :namePrefix, :string
  end
end

class CreateJoinTableProjectsUsers < ActiveRecord::Migration[7.0]
  def change
    create_join_table(:projects, :users, column_options: {type: :uuid}) do |t|
      t.index [:project_id, :user_id]
      t.index [:user_id, :project_id]
    end
  end
end

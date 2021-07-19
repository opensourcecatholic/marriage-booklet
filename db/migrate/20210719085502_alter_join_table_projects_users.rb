class AlterJoinTableProjectsUsers < ActiveRecord::Migration[6.1]
  def change
    drop_table :projects_users
    create_join_table(:projects, :users, column_options: {type: :uuid}) do |t|
      t.index [:project_id, :user_id]
      t.index [:user_id, :project_id]
    end
  end
end

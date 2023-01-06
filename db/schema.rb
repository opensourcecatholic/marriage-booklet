# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_04_190635) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "projects", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "liturgy"
    t.datetime "weddingdate"
    t.string "church"
    t.string "city"
    t.string "celebrantNamePrefix"
    t.string "celebrantFirstName"
    t.string "celebrantLastName"
    t.string "brideFirstName"
    t.string "brideLastName"
    t.string "groomFirstName"
    t.string "groomLastName"
    t.boolean "isSecured", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects_users", id: false, force: :cascade do |t|
    t.uuid "project_id", null: false
    t.uuid "user_id", null: false
    t.index ["project_id", "user_id"], name: "index_projects_users_on_project_id_and_user_id"
    t.index ["user_id", "project_id"], name: "index_projects_users_on_user_id_and_project_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.integer "role"
    t.string "avatar"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wedding_party_members", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.integer "role"
    t.integer "relationship"
    t.string "relationshipTo"
    t.uuid "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_wedding_party_members_on_project_id"
  end

  add_foreign_key "wedding_party_members", "projects"
end

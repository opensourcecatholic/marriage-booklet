require "application_system_test_case"

class WeddingPartyMembersTest < ApplicationSystemTestCase
  setup do
    @wedding_party_member = wedding_party_members(:one)
  end

  test "visiting the index" do
    visit wedding_party_members_url
    assert_selector "h1", text: "Wedding party members"
  end

  test "should create wedding party member" do
    visit wedding_party_members_url
    click_on "New wedding party member"

    fill_in "Firstname", with: @wedding_party_member.firstName
    fill_in "Lastname", with: @wedding_party_member.lastName
    fill_in "Project", with: @wedding_party_member.project_id
    fill_in "Relationship", with: @wedding_party_member.relationship
    fill_in "Relationshipto", with: @wedding_party_member.relationshipTo
    fill_in "Role", with: @wedding_party_member.role
    click_on "Create Wedding party member"

    assert_text "Wedding party member was successfully created"
    click_on "Back"
  end

  test "should update Wedding party member" do
    visit wedding_party_member_url(@wedding_party_member)
    click_on "Edit this wedding party member", match: :first

    fill_in "Firstname", with: @wedding_party_member.firstName
    fill_in "Lastname", with: @wedding_party_member.lastName
    fill_in "Project", with: @wedding_party_member.project_id
    fill_in "Relationship", with: @wedding_party_member.relationship
    fill_in "Relationshipto", with: @wedding_party_member.relationshipTo
    fill_in "Role", with: @wedding_party_member.role
    click_on "Update Wedding party member"

    assert_text "Wedding party member was successfully updated"
    click_on "Back"
  end

  test "should destroy Wedding party member" do
    visit wedding_party_member_url(@wedding_party_member)
    click_on "Destroy this wedding party member", match: :first

    assert_text "Wedding party member was successfully destroyed"
  end
end

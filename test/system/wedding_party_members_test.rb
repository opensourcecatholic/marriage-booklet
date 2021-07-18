require "application_system_test_case"

class WeddingPartyMembersTest < ApplicationSystemTestCase
  setup do
    @wedding_party_member = wedding_party_members(:one)
  end

  test "visiting the index" do
    visit wedding_party_members_url
    assert_selector "h1", text: "Wedding Party Members"
  end

  test "creating a Wedding party member" do
    visit wedding_party_members_url
    click_on "New Wedding Party Member"

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

  test "updating a Wedding party member" do
    visit wedding_party_members_url
    click_on "Edit", match: :first

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

  test "destroying a Wedding party member" do
    visit wedding_party_members_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Wedding party member was successfully destroyed"
  end
end

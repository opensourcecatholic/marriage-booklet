require "test_helper"

class WeddingPartyMembersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wedding_party_member = wedding_party_members(:one)
  end

  test "should get index" do
    get wedding_party_members_url
    assert_response :success
  end

  test "should get new" do
    get new_wedding_party_member_url
    assert_response :success
  end

  test "should create wedding_party_member" do
    assert_difference("WeddingPartyMember.count") do
      post wedding_party_members_url, params: { wedding_party_member: { firstName: @wedding_party_member.firstName, lastName: @wedding_party_member.lastName, project_id: @wedding_party_member.project_id, role: @wedding_party_member.role, relationship: @wedding_party_member.relationship, relationshipTo: @wedding_party_member.relationshipTo } }
    end

    assert_redirected_to wedding_party_member_url(WeddingPartyMember.last)
  end

  test "should show wedding_party_member" do
    get wedding_party_member_url(@wedding_party_member)
    assert_response :success
  end

  test "should get edit" do
    get edit_wedding_party_member_url(@wedding_party_member)
    assert_response :success
  end

  test "should update wedding_party_member" do
    patch wedding_party_member_url(@wedding_party_member), params: { wedding_party_member: { firstName: 'Alicia', lastName: 'Keys' } }
    assert_redirected_to wedding_party_member_url(@wedding_party_member)
  end

  test "should destroy wedding_party_member" do
    assert_difference("WeddingPartyMember.count", -1) do
      delete wedding_party_member_url(@wedding_party_member)
    end

    assert_redirected_to wedding_party_members_url
  end
end

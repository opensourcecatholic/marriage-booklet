require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.new
    @user.avatar = 'MyString'
    @user.email = 'donkey@stable.ps'
    @user.password = 'PasswordForDonkey'
    @user.password_confirmation = 'PasswordForDonkey'
    @user.role = User.roles[:guest]
    @user.username = 'donkey_kong'
  end

  test "should get index" do
    get users_url
    assert_response :success
  end

  test "should get new" do
    get new_user_url
    assert_response :success
  end

  test "should create user" do
    assert_difference("User.count") do
      post users_url, params: { user: { avatar: @user.avatar, email: @user.email, password: @user.password, password_confirmation: @user.password_confirmation, role: @user.role, username: @user.username } }
    end

    assert_redirected_to projects_url
  end

  test "should show user" do
    get user_url(@user)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_url(@user)
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { role: :celebrant } }
    assert_redirected_to projects_url
  end

  test "should destroy user" do
    assert_difference("User.count", -1) do
      delete user_url(@user)
    end

    assert_redirected_to users_url
  end
end

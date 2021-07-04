require "test_helper"

class ProjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project = projects(:one)
  end

  test "should get index" do
    get projects_url, locale: 'en'
    assert_response :success
  end

  test "should get new" do
    get new_project_url, locale: 'en'
    assert_response :success
  end

  test "should create project" do
    assert_difference('Project.count') do
      post projects_url, locale: 'en', params: { project: { brideFirstName: @project.brideFirstName, brideLastName: @project.brideLastName, celebrantFirstName: @project.celebrantFirstName, celebrantLastName: @project.celebrantLastName, celebrantNamePrefix: @project.celebrantNamePrefix, church: @project.church, city: @project.city, groomFirstName: @project.groomFirstName, groomLastName: @project.groomLastName, liturgy: @project.liturgy, weddingdate: @project.weddingdate } }
    end

    assert_redirected_to project_url(Project.last)
  end

  test "should show project" do
    get project_url(@project)
    assert_response :success, locale: 'en'
  end

  test "should get edit" do
    get edit_project_url(@project)
    assert_response :success, locale: 'en'
  end

  test "should update project" do
    patch project_url(@project), locale: 'en', params: { project: { brideFirstName: @project.brideFirstName, brideLastName: @project.brideLastName, celebrantFirstName: @project.celebrantFirstName, celebrantLastName: @project.celebrantLastName, celebrantNamePrefix: @project.celebrantNamePrefix, church: @project.church, city: @project.city, groomFirstName: @project.groomFirstName, groomLastName: @project.groomLastName, liturgy: @project.liturgy, weddingdate: @project.weddingdate } }
    assert_redirected_to project_url(@project)
  end

  test "should destroy project" do
    assert_difference('Project.count', -1) do
      delete project_url(@project), locale: 'en'
    end

    assert_redirected_to projects_url
  end
end

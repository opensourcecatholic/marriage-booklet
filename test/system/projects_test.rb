require "application_system_test_case"

class ProjectsTest < ApplicationSystemTestCase
  setup do
    @project = projects(:one)
  end

  test "visiting the index" do
    visit projects_url
    assert_selector "h1", text: "Projects"
  end

  test "should create project" do
    visit projects_url
    click_on "New project"

    fill_in "Bridefirstname", with: @project.brideFirstName
    fill_in "Bridelastname", with: @project.brideLastName
    fill_in "Celebrantfirstname", with: @project.celebrantFirstName
    fill_in "Celebrantlastname", with: @project.celebrantLastName
    fill_in "Celebrantnameprefix", with: @project.celebrantNamePrefix
    fill_in "Church", with: @project.church
    fill_in "City", with: @project.city
    fill_in "Groomfirstname", with: @project.groomFirstName
    fill_in "Groomlastname", with: @project.groomLastName
    check "Issecured" if @project.isSecured
    fill_in "Liturgy", with: @project.liturgy
    fill_in "Weddingdate", with: @project.weddingdate
    click_on "Create Project"

    assert_text "Project was successfully created"
    click_on "Back"
  end

  test "should update Project" do
    visit project_url(@project)
    click_on "Edit this project", match: :first

    fill_in "Bridefirstname", with: @project.brideFirstName
    fill_in "Bridelastname", with: @project.brideLastName
    fill_in "Celebrantfirstname", with: @project.celebrantFirstName
    fill_in "Celebrantlastname", with: @project.celebrantLastName
    fill_in "Celebrantnameprefix", with: @project.celebrantNamePrefix
    fill_in "Church", with: @project.church
    fill_in "City", with: @project.city
    fill_in "Groomfirstname", with: @project.groomFirstName
    fill_in "Groomlastname", with: @project.groomLastName
    check "Issecured" if @project.isSecured
    fill_in "Liturgy", with: @project.liturgy
    fill_in "Weddingdate", with: @project.weddingdate
    click_on "Update Project"

    assert_text "Project was successfully updated"
    click_on "Back"
  end

  test "should destroy Project" do
    visit project_url(@project)
    click_on "Destroy this project", match: :first

    assert_text "Project was successfully destroyed"
  end
end

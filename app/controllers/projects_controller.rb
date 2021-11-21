class ProjectsController < ApplicationController
  before_action :set_project, only: %i[ show edit update destroy ]

  def logged_in?
      !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) if !!session[:user_id]
  end

  # GET /projects or /projects.json
  def index
    if logged_in?
      @projects = (current_user.projects + Project.where(isSecured: false))
    else
      @projects = Project.where(isSecured: false)
    end
  end

  # GET /projects/1 or /projects/1.json
  def show
    @projects = Project.all
  end

  # GET /projects/new
  def new
    @projects = Project.all
    @project = Project.new
    users = @project.users.build
    wedding_party_members = 2.times { @project.wedding_party_members.build }
    unless logged_in?
      @randomUsername = SecureRandom.hex(10)
    end
    @weddingPartyMemberRoleOptions = case I18n.locale
    when :en
      ["maidofhonor","bestman"]
    when :it
      ["bridesmaid","groomsman"]
    when :es
      ["bridesmaid","groomsman"]
    else
      ["bridesmaid","groomsman"]
    end
  end

  # GET /projects/1/edit
  def edit
    @projects = Project.all
  end

  # POST /projects or /projects.json
  def create
    @project = Project.new(project_params)
    if logged_in?
      @project.users = [ current_user ]
    end
    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: "Project was successfully created." }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1 or /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: "Project was successfully updated." }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1 or /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: "Project was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:liturgy, :weddingdate, :church, :city, :celebrantNamePrefix, :celebrantFirstName, :celebrantLastName, :brideFirstName, :brideLastName, :groomFirstName, :groomLastName, :isSecured, users_attributes: [:role, :email, :username, :password, :password_confirmation], wedding_party_members_attributes: [:role, :relationship, :relationshipTo, :firstName, :lastName])
    end
end

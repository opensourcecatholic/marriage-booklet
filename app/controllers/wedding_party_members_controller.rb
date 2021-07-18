class WeddingPartyMembersController < ApplicationController
  before_action :set_wedding_party_member, only: %i[ show edit update destroy ]

  # GET /wedding_party_members or /wedding_party_members.json
  def index
    @wedding_party_members = WeddingPartyMember.all
  end

  # GET /wedding_party_members/1 or /wedding_party_members/1.json
  def show
  end

  # GET /wedding_party_members/new
  def new
    @wedding_party_member = WeddingPartyMember.new
  end

  # GET /wedding_party_members/1/edit
  def edit
  end

  # POST /wedding_party_members or /wedding_party_members.json
  def create
    @wedding_party_member = WeddingPartyMember.new(wedding_party_member_params)

    respond_to do |format|
      if @wedding_party_member.save
        format.html { redirect_to @wedding_party_member, notice: "Wedding party member was successfully created." }
        format.json { render :show, status: :created, location: @wedding_party_member }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @wedding_party_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wedding_party_members/1 or /wedding_party_members/1.json
  def update
    respond_to do |format|
      if @wedding_party_member.update(wedding_party_member_params)
        format.html { redirect_to @wedding_party_member, notice: "Wedding party member was successfully updated." }
        format.json { render :show, status: :ok, location: @wedding_party_member }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @wedding_party_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wedding_party_members/1 or /wedding_party_members/1.json
  def destroy
    @wedding_party_member.destroy
    respond_to do |format|
      format.html { redirect_to wedding_party_members_url, notice: "Wedding party member was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wedding_party_member
      @wedding_party_member = WeddingPartyMember.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def wedding_party_member_params
      params.require(:wedding_party_member).permit(:firstName, :lastName, :role, :relationship, :relationshipTo, :project_id)
    end
end

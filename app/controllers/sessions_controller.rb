class SessionsController < ApplicationController
    def create
        @user = User.where(username: params[:username]).or(User.where(email: params[:username])).first
        #authenticate user credentials
        if !!@user && @user.authenticate(params[:password])
            #set session and redirect on success
            session[:user_id] = @user.id
            respond_to do |format|
                format.html { redirect_to projects_url, notice: "User was successfully logged in as #{@user.username}." }
                format.json { head :no_content }
            end
        else
            respond_to do |format|
                #error message on fail
                message = "Something went wrong! Make sure your username and password are correct."
                format.html { redirect_to login_url, notice: message }
                format.json { head :no_content }
            end
        end
    end
    def destroy
        session.clear
        respond_to do |format|
            format.html { redirect_to projects_url, notice: "User was successfully logged out." }
            format.json { head :no_content }
        end
    end
end

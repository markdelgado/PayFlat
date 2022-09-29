class SessionsController < ApplicationController

    def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password_digest])
        login!
        render json: {logged_in: true, user: @user}
    else
        render  json:{error: 'User Not Found'}, status: 401
        end
    end

end

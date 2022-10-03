class UsersController < ApplicationController


    # def login 
    #     # user = User.find_by(email: params[:email]).try(::authenticate, params[:password])
        
    # end

    def index
        render json: User.all
    end 

    def show
        @user = User.find_by(id: params[:id])
        # .to_json(include:[:landlord])
        render json: @user
      
    end


end

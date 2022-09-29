class UsersController < ApplicationController

    def index
        render json: User.all
    end 

    def show
        user = User.find_by(id: params[:id]).to_json(methods:[:landlord])
        userT = User.find_by(id: params[:id]).to_json(methods:[:tenant])

        if userT.tenant.valid?
            render json: userT
        else
            render json: user
        end
    end


end

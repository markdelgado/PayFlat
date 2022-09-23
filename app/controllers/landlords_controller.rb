class LandlordsController < ApplicationController
   
    def index
        render json: Landlord.all
    end

    def show
        landlord = find_landlord
        if landlord.valid?
            render json: landlord
        else
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    def create
        landlord = Landlord.create!(landlord_params)
        if landlord.valid?
            render json: landlord
        else
            render json: {error: 'Validation Errors'}
        end
    end

    def destroy
        landlord = find_landlord
        if landlord.valid?
            landlord.destroy
            render json: {}
        else
            render json: {error: "Not found"}, status: :not_found
        end
    end

    private

    def find_landlord
        Landlord.find_by(id: params[:id])
    end

    def landlord_params
        params.permit(:user_id)
    end

end

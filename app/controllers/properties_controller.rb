class PropertiesController < ApplicationController
    

    # def index
    #     render json: Property.all.as_json( :except => [:created_at, :updated_at])
    # end

    def index
        render json: Property.all.as_json
    end

    def show 
        property = find_prop
        render json: property
    end

    def create
        #  token = request.headers["token"]
        # landlord_id = decode_token(token)
        property = Property.create!(prop_params)
        if property.valid?
            render json: property
        else
            render json:{error: "Validation errors"}
        end
    end
    
    def update
        property = find_prop
        if property.valid?
        property.update(prop_params)
        render json: property
        else
            render json:{error: "Property Not Found"}, status: :not_found
        end
    end



    def destroy
        property = find_prop
        if property.valid?
            property.destroy
            render json: {}
        else 
            render json: {error: "Property Not Found"}
        end

    end

    private

    def find_prop
        Property.find_by(id: params[:id])
    end

    def prop_params
        params.permit(:name, :address, :landlord_id, :unit_count)
    end
end

class UnitsController < ApplicationController


    def index
        render json: Unit.all
    end

    def show
        unit = find_unit
        if unit.valid?
            render json: unit
        else
            render json: {error: "Unit Not Found"}, status: :not_found

        end
    end
    def create
        unit = Unit.create!(unit_params)
        if unit.valid?
            render json: unit, status: :created
        else
            render json: {error: 'Validation Error'}
        end
    end 
    def update
        unit = find_unit
        if unit.valid?
            unit.update(unit_params)
            render json: unit
        else
            render json: {error: 'Unit Not Found'}
        end
    end
    
    def destroy
        unit = find_unit
        if unit.valid?
            unit.destroy
            render json:{}
        else
            render json:{error: 'Unit not found'}, status: :not_found
        end
    end
    private

    def find_unit
        Unit.find_by(id: params[:id])
    end 

    def unit_params
        params.permit(:property_id, :tenant_id, :price, :lease_start_date, :lease_end_date, :sqft, :bed, :bath, :vacant, :tenant_name, :apartment_num, :tenant_phone)
    end
end

class TenantsController < ApplicationController

    def index
        render json:Tenant.all.as_json(include: [:user])
    end

    def show
        tenant = find_tenant
        if tenant.valid?
            render json: tenant
        else 
            render json: {error: 'Tenant not Found'}, status: :not_found
        end
    end
    def create
        tenant = Tenant.create!(tenant_params)
        if tenant.valid?
            render json: tenant.as_json(include: [:user])
        else 
            render json: {error: "Validation Errors"}
        end
    end

    def destroy
        tenant = find_tenant
        if tenant.valid?
            tenant.destroy
            render json: {}
        else 
            render json: {error: "Tenant Not Found"}, status: :not_found
        end
    end


    private
    def find_tenant
        Tenant.find_by(id: params[:id])
    end

    def tenant_params
        params.permit(:user_id)
    end
end

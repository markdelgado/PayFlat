class UsersController < ApplicationController
 before_action :set_user, only: %i[ show update destroy ]
    def index
        render json: User.all
    end 

    def show
        @user = User.find_by(id: params[:id])
        # .to_json(include:[:landlord])
        render json: @user
    end


def login
    user = User.find_by!(email: params[:email]).try(:authenticate, params[:password])
    if user
        token = generate_token(user.id)
        render json: { user: user, token: token }
       
    else
        render json: { error: "Invalid Password"}, status: 401
    end
end


def profile
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
      render json: User.find(user_id)
    else
      render json: {error: "401 incorrect token"}, status: 401
    end
  end


  def create
    user = User.create!(email: params[:email], password: params[:password])
    render json:user
  end


end

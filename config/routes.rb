Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :properties
  resources :tenants
  resources :units
  resources :landlords
  resources :users

  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'

end

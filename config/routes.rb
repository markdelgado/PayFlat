Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :properties
  resources :tenants
  resources :units
  resources :landlords

  post '/login', to: 'sessions#create'
  # post '/logout', to: ''
end

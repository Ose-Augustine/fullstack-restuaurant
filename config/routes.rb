Rails.application.routes.draw do
  #devise_for :users
  get '/foods' , to: 'foods#index'
  get '/drinks', to: 'drinks#index'
  #root "foods#index"
end

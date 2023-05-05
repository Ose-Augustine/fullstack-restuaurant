Rails.application.routes.draw do
  devise_for :users
  resources :foods
  post '/orders/create', to: 'orders#new'
  root "foods#index"
end

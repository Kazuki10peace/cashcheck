Rails.application.routes.draw do
  devise_for :users
  root to: 'calcs#index'
  resources :calcs, only: :index
end

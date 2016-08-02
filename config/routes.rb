Rails.application.routes.draw do

  root to: 'app#index'
  get 'app/*whatevs', to: 'app#index'

  resources :practices, only: [:index, :create, :update, :destroy]
  resources :drills, only: [:index, :create, :update, :destroy]
  resources :sessions, only: [:new, :create]
  resources :app, only: :index

  delete :sessions, to: 'sessions#destroy', via: :delete

end

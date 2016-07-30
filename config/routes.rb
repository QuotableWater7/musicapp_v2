Rails.application.routes.draw do

  root 'welcome#index'

  resources :practices, only: [:index, :create]
  resources :drills, only: [:index, :create, :update]
  resources :sessions, only: [:new, :create]
  resources :welcome, only: :index

  delete :sessions, to: 'sessions#destroy', via: :delete

end

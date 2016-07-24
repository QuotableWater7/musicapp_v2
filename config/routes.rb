Rails.application.routes.draw do

  root 'welcome#index'

  resources :practices, only: :show
  resources :sessions, only: [:new, :create, :destroy]
  resources :welcome, only: :index

end

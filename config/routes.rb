Rails.application.routes.draw do

  root 'welcome#index'

  resources :practices, only: [:show, :create]
  resources :sessions, only: [:new, :create]
  delete :sessions, to: 'sessions#destroy', via: :delete
  resources :welcome, only: :index

end

Rails.application.routes.draw do

  root 'welcome#index'

  resources :practices, only: :show

end

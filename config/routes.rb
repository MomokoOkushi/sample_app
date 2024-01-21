Rails.application.routes.draw do
  get '/top' => 'homes#top'
  resources :lists
  root to: 'homes#practice_js'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

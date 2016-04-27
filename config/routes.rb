Rails.application.routes.draw do
  resources :cars, except: [:new, :edit]
end

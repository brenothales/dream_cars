Rails.application.routes.draw do
  scope '/api' do
    resources :cars, except: [:new, :edit]
  end
end

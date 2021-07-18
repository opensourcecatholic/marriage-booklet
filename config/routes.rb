Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/:locale' => 'pages#home'
  root to: redirect("/#{I18n.default_locale}"), as: :redirected_root

  scope "/:locale" do
    root to: 'pages#home'
    resources :projects
    resources :users
    resources :wedding_party_members
    get '/login', to: 'sessions#login'
    post '/login', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'
    get '/logout', to: 'sessions#destroy'
  end
end

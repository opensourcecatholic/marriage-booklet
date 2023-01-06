Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
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

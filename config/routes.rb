Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/:locale' => 'pages#home'
  root to: 'pages#home'
  
  scope "/:locale" do
    resources :pages do
      collection do
        get :new_project
      end
    end
  end  
end

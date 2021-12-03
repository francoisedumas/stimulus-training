Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get "/drum", to: "pages#drum"
  get "/clock", to: "pages#clock"
  get "/css-variables", to: "pages#css_variables"
  get "/calendar", to: "pages#calendar"
end

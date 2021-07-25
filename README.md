# app-interface-netflix-ionic

# ADD PAGES
ionic g page tab4
ionic g page modal

# DIRECTIVE
ionic g module directives/sharedDirectives --flat
ionic g directive directives/HideHeader

# CUSTOM COMPONENTS
ionic g module components/sharedComponents --flat
ionic g component components/drawer
ionic g service services/drawer

# DEPENDENCES

npm i ng-lazyload-image
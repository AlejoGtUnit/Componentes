var app = angular.module("componentesApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", { templateUrl: "views/main.html" })
    .when("/picks-gratis", { templateUrl: "views/especificos/picks-gratis.html" })
    .when("/contacto", { templateUrl: "views/contacto.html" });
});
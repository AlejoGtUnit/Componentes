var app = angular.module("componentesApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", { templateUrl: "views/main.html" })
    .when("/picks-gratis", { templateUrl: "views/especificos/picks-gratis.html" })
    .when("/productos-servicios", { templateUrl: "views/productos-servicios.html" })
    .when("/genericos", { templateUrl: "views/genericos.html" })
    .when("/noticias", { templateUrl: "views/noticias.html" })
    .when("/contacto", { templateUrl: "views/contacto.html" });
});

$(".tema").on('click', function(){
    var tema = $(this).data("tema"); 
    if (tema != undefined && tema)
    {
        $("#tema").attr("href", "css/bootswatch/bootstrap." + tema + ".min.css");
    }
});
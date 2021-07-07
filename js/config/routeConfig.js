angular.module("appPokedex").config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider.when("/app", {
        templateUrl: "view/app.html",
        controller: "appController"
    });

    $routeProvider.when("/pokemons", {
        templateUrl: "view/pokemons.html",
        controller: "pokemonController"
    });

    $routeProvider.otherwise({
        redirectTo: "/app"
    });
});

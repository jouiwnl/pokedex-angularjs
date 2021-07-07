angular.module("appPokedex").directive("pokemonsSelect", function() {
    return {
        templateUrl: "view/pokemons.html",
        controller: "pokemonController",
        scope: {
            
        },
        replace: true
    }
});
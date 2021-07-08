angular.module("appPokedex").controller("appController", function($scope, pokemonService) {
    $scope.pokemons = [];
    $scope.pokemon = {};
    $scope.showPokemons = true;

    $scope.loadSingle = (nome) => {
        pokemonService.findSingle(nome).then((response) => {
            $scope.pokemon = response.data;
            console.log($scope.pokemon)
        }).catch(function(error){
            alert(error.data.message)
        });  
    }

    $scope.infoPokemon = (pokemon) => {
        $scope.loadSingle(pokemon.name);
        $scope.pokemon = pokemon;
    }

    $scope.buscarPokemon = (nome) => {
        var input = document.querySelector("#input-pokemon");
        var pokemonName = input.value;
        nome = pokemonName;

        $scope.loadSingle(nome);
    }
   
});

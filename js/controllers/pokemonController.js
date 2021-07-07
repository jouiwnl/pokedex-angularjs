angular.module("appPokedex").controller("pokemonController", function($scope, pokemonService) {
    $scope.pokemons = [];
    $scope.pokemon = {};
    $scope.showPokemons = true;


    $scope.loadData = () => {
        pokemonService.findAll().then((response) => {
            $scope.pokemons = response.data.results;
            console.log($scope.pokemons)
        }).catch(function(error){
            alert(error.data.message)
        });
    }

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

    $scope.loadData();
})
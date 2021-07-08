angular.module("appPokedex").controller("appController", function($scope, pokemonService) {
    $scope.pokemons = [];
    $scope.pokemon = {};

    $scope.loadSingle = (nome) => {
        pokemonService.findSingle(nome).then((response) => {
            $scope.pokemon = response.data;
            console.log($scope.pokemon)
        }).catch(function(error){
            alert("Pokemon não encontrado")
        });  
    }

    $scope.buscarPokemon = (nome) => {
        var input = document.querySelector("#input-pokemon");
        var pokemonName = input.value;
        nome = pokemonName;

        $scope.loadSingle(nome);

        $scope.showPokemonPhoto = true;
    }
   
});

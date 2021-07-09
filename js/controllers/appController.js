angular.module("appPokedex").controller("appController", function($scope, pokemonService) {
    $scope.pokemons = [];
    $scope.pokemon = {};
    $scope.showPokemonInfo = true;
    $scope.showPokemonHP = false;
    $scope.showPokemonAttack = false;
    $scope.showPokemonStrenght = false;
    $scope.showPokemonDefense = false;
    $scope.showPokemonSpeed = false;

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
        $scope.showPokemonAttack = false;
        $scope.showPokemonHP = false;
        $scope.showPokemonStrenght = false;
        $scope.showPokemonDefense = false;
        $scope.showPokemonSpeed = false;
        $scope.showPokemonInfo = true;
    }

    $scope.attackPokemon = () => {
        $scope.showPokemonInfo = false;
        $scope.showPokemonHP = false;
        $scope.showPokemonStrenght = false;
        $scope.showPokemonDefense = false;
        $scope.showPokemonSpeed = false;
        $scope.showPokemonAttack = true;
    }

    $scope.hpPokemon = () => {
        $scope.showPokemonInfo = false;
        $scope.showPokemonAttack = false;
        $scope.showPokemonStrenght = false;
        $scope.showPokemonDefense = false;
        $scope.showPokemonSpeed = false;
        $scope.showPokemonHP = true; 
    }

    $scope.strenghtPokemon = () => {
        $scope.showPokemonInfo = false;
        $scope.showPokemonAttack = false;
        $scope.showPokemonHP = false;
        $scope.showPokemonDefense = false;
        $scope.showPokemonSpeed = false;
        $scope.showPokemonStrenght = true;
    }

    $scope.defensePokemon = () => {
        $scope.showPokemonInfo = false;
        $scope.showPokemonAttack = false;
        $scope.showPokemonHP = false;
        $scope.showPokemonStrenght = false;
        $scope.showPokemonSpeed = false;
        $scope.showPokemonDefense = true;
    }

    $scope.speedPokemon = () => {
        $scope.showPokemonInfo = false;
        $scope.showPokemonAttack = false;
        $scope.showPokemonHP = false;
        $scope.showPokemonStrenght = false;
        $scope.showPokemonDefense = false;
        $scope.showPokemonSpeed = true;
    }

   
});

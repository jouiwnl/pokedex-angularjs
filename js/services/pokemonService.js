angular.module("appPokedex").service("pokemonService", function($http, config) {
    
    this.findSingle = (nome) => {
        return $http.get(config.apiUrl + "/pokemon/" + nome)
    }

});

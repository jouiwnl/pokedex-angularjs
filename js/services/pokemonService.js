angular.module("appPokedex").service("pokemonService", function($http, config) {
    
    this.findAll = () => {
        return $http.get(config.apiUrl + "/pokemon?&limit=150");
    }
    
    this.findSingle = (nome) => {
        return $http.get(config.apiUrl + "/pokemon/" + nome)
    }

});

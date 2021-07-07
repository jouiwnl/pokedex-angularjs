angular.module("appPokedex").controller("appController", function($scope) {

    $scope.mostrarMenu = false;
    $scope.activeTab = "pokemons";

    $scope.menus = [
        {name: "pokemons", tab: "pokemons"},
        {name: "teste", tab: "teste"}
    ]
    
    $scope.changeTab = (tab) => {
        $scope.activeTab = tab;
    }


    $scope.toggleMenu = () => {
        $scope.mostrarMenu = !$scope.mostrarMenu;
    }

});

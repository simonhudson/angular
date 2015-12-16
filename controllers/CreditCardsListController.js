(function() {
    
    var app = angular.module('app');

    var CreditCardsListController = function($scope, CreditCards) {

        var onData = function(data) {
            $scope.cards = data.data;
            // console.log($scope.cards);
        };

        $scope.doSort = function() {
            $scope.listSortOrder = document.getElementById('list-sort-order').value;
        };

        var onError = function() {
            $scope.error = 'Could not retrieve credit cards';
        };

        // CreditCards.foo();
        $scope.listSortOrder = '+cardTitle';
        CreditCards.getAll().then(onData, onError);

    };

    app.controller('CreditCardsListController', CreditCardsListController);

}());
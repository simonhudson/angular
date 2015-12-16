(function() {
    
    var app = angular.module('app');

    var CreditCardDetailsController = function($scope, CreditCards, $routeParams) {

        var onData = function(data) {
            $scope.card = data;
        };

        var onError = function() {
            $scope.error = 'Could not retrieve card details';
        };

        CreditCards.getCardDetails($routeParams.cardId).then(onData, onError);

    };

    app.controller('CreditCardDetailsController', CreditCardDetailsController);

}());
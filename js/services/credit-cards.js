(function() {

    var apiUrlRoot = 'data/';
    var apiUrl = apiUrlRoot + 'credit-cards.json';
    var apiKey = 'cFIgmrmmba5bQJaIec2f2aJ75odZBkMw1hy6TJmU';

    var CreditCards = function($http) {

        var getAll = function() {
            return $http.get(apiUrl).then(function(response) {
                return response.data;
            });
        };

        var getCardDetails = function(cardId) {
            return $http.get(apiUrl).then(function(response) {
                for (var i in response.data.data) {
                    if (response.data.data[i].id == cardId)
                        return response.data.data[i];
                }
            });
        };

        // Return public API methods
        return {
            getAll: getAll,
            getCardDetails: getCardDetails
        };

    };

    var module = angular.module('app');
    module.factory('CreditCards', CreditCards);

}());
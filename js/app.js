(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/credit-cards', {
                templateUrl: 'views/credit-cards/list.html',
                controller: 'CreditCardsListController'
            })
            .when('/credit-card/:cardId', {
                templateUrl: 'views/credit-cards/card-details.html',
                controller: 'CreditCardDetailsController'
            })
            .when('/sandbox', {
                templateUrl: 'views/sandbox.html'
            })
            .otherwise({redirectTo: '/home'});
    });

}());
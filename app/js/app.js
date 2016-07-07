'use strict';
angular.module('myApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            //route for the main page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/content.html',
                        cotroller  : 'MainController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            //route for the content task#1
            .state('app.task1', {
                url: 'task1',
                views: {
                    'tasks': {
                        templateUrl: 'views/task1.html'
                    }
                }
            })

            //route for the
        ;
        $urlRouterProvider.otherwise('/');
    });
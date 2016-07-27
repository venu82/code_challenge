(function() {
  'use strict';

  angular
    .module('code-challenge')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'app/main/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('home.email', {
        url: '/email',
        templateUrl: 'app/main/email/email.html',
        controller: 'EmailController',
        controllerAs: 'email'
      });

    $urlRouterProvider.otherwise('/home/profile');
  }

})();

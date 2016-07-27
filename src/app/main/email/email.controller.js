(function () {
  'use strict';

  /** @ngInject */
  function EmailController(userService, $scope) {
    var vm = this;
    vm.emails = userService.getEmailAddresses();

    vm.addEmail = function () {
      vm.emails = userService.getEmailAddresses()||[];
      vm.emails.push(angular.copy(vm.add));
      userService.setEmailAddresses(vm.emails);
      userService.triggerUserChangeEvent();
      vm.add = {};
      $scope.emailAddForm.$setPristine();
    }

    vm.removeEmail = function ($index) {
      vm.emails = userService.getEmailAddresses()||[];
      vm.emails.splice($index, 1);
      userService.setEmailAddresses(vm.emails);
      userService.triggerUserChangeEvent();
    }

  }

  angular
    .module('code-challenge')
    .controller('EmailController', EmailController);


})();

(function () {
  'use strict';

  /** @ngInject */
  function MainController(userService, $rootScope, $scope) {
    var vm = this;
    vm.data = userService.get();
    vm.email = '';
    setEmail();

    function setEmail(){
      vm.email = '';
      if(vm.data.emailAddresses && vm.data.emailAddresses.length){
        vm.email = vm.data.emailAddresses[0].email;
      }
    }

    var deregister = $rootScope.$on(
      "user-info.changed",
      function () {
        vm.data = userService.get();
        setEmail();
      }
    );

    $scope.$on('destroy', function () {
      deregister();
    });


  }

  angular
    .module('code-challenge')
    .controller('MainController', MainController);


})();

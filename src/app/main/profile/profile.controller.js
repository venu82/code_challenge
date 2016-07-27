(function () {
  'use strict';

  /** @ngInject */
  function ProfileController(userService, toastr, Upload) {
    var vm = this;
    vm.data = userService.get();

    vm.submit = function () {
      userService.set(vm.data);
      toastr.info('Saved successfully');
};
    vm.uploadPhoto = function (file) {
      Upload.base64DataUrl(file).then(function (urls) {
        vm.data.photo = urls[0];
        userService.setPhoto(urls[0]);
        userService.triggerUserChangeEvent();
      });
    };

    vm.removePhoto = function () {
      vm.data.photo = null;
      userService.setPhoto(null);
      userService.triggerUserChangeEvent();

    };

  }

  angular
    .module('code-challenge')
    .controller('ProfileController', ProfileController);


})();

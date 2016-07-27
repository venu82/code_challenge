(function () {
  'use strict';

  angular
    .module('code-challenge')
    .service('userService', UserService);

  /** @ngInject */
  function UserService($sessionStorage, $rootScope) {

    this.getForename = function () {
      return $sessionStorage.forename;
    };


    this.setForename = function (value) {
      return $sessionStorage.forename = value;
    };


    this.getSurname = function () {
      return $sessionStorage.surname;
    };


    this.setSurname = function (value) {
      return $sessionStorage.surname = value;
    };

    this.getPhoto = function () {
      return $sessionStorage.photo;
    };


    this.setPhoto = function (value) {
      return $sessionStorage.photo = value;
    };

    this.getTitle = function () {
      return $sessionStorage.title;
    };

    this.setTitle = function (value) {
      return $sessionStorage.title = value;
    };


    this.getEmailAddresses = function () {
      return $sessionStorage.emailAddresses;
    };

    this.setEmailAddresses = function (value) {
      return  $sessionStorage.emailAddresses = value;
    };


    this.get = function () {

      return {
        forename: this.getForename(),
        surname: this.getSurname(),
        photo: this.getPhoto(),
        title: this.getTitle(),
        emailAddresses: this.getEmailAddresses()

      };
    }

    this.set = function (data) {

      if (data.hasOwnProperty('forename')) {
        this.setForename(data.forename);
      }
      if (data.hasOwnProperty('surname')) {
        this.setSurname(data.surname);
      }
      if (data.hasOwnProperty('photo')) {
        this.setPhoto(data.photo);
      }

      if (data.hasOwnProperty('emailAddresses')) {
        this.setEmailAddresses(data.emailAddresses);
      }

      if (data.hasOwnProperty('title')) {
        this.setTitle(data.title);
      }
      this.triggerUserChangeEvent();

    };

    this.triggerUserChangeEvent = function () {
      $rootScope.$emit('user-info.changed');
    }

  }

})();

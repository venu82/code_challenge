(function() {
  'use strict';

  angular
    .module('code-challenge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

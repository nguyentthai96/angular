var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'example', 'articles', 'chat']);
mainApplicationModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
  if (window.location.hash === '#_=_') {
    window.location.hash = '#!';
  }
  else if (window.location.hash.length <= 1) {
    window.location.hash = '#!/';
  }
  angular.bootstrap(document, [mainApplicationModuleName]);
});
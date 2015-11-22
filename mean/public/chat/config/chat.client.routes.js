angular.module('chat').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/chat', {
    title : 'Chat Room',
    templateUrl: 'chat/views/chat.client.view.html'
  });
}])
.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
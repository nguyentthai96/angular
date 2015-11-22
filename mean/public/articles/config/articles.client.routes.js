angular.module('articles').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/articles', {
      title: "Articles",
      templateUrl: 'articles/views/list-articles.client.view.html'
    }).
    when('/articles/create', {
      title: "New Article",
      templateUrl: 'articles/views/create-article.client.view.html'
    }).
    when('/articles/:articleId', {
      templateUrl: 'articles/views/view-article.client.view.html'
    }).
    when('/articles/:articleId/edit', {
      title: "Edit Article",
      templateUrl: 'articles/views/edit-article.client.view.html'
    });
  }
]).run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
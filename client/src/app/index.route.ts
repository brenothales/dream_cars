/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/cars', {
      templateUrl: 'app/components/cars.html',
      controller: 'CarsController',
      controllerAs: 'cars'
    })
    .otherwise({
      redirectTo: '/'
    });
}

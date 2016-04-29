/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/cars.html',
      controller: 'CarsController',
      controllerAs: 'cars'
    })
    .when('/cars-new', {
      templateUrl: 'app/components/cars-new.html',
      controller: 'CarsNewController',
      controllerAs: 'cars'
    })
    .otherwise({
      redirectTo: '/'
    });
}

/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/cars.html',
      controller: 'CarsController',
      controllerAs: 'cars'
    })
    .otherwise({
      redirectTo: '/'
    });
}

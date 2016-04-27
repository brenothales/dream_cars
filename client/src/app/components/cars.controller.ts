export class CarsController {
  constructor ($scope, Car) {
    'ngInject';

    Car.query().then(cars => $scope.cars = cars);
  }
}

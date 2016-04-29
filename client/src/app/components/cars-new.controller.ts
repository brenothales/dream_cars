export class CarsNewController {
  public car;

  constructor(Car: any, public $location: angular.ILocationService) {
    /* tslint:disable */ 'ngInject'; /* tslint:enable */

    this.car = new Car();
  }

  save(car: any) {
    car.save().then(() => this.$location.path('/'));
  }
}

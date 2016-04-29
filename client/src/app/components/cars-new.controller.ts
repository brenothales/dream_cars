export class CarsNewController {
  public car;
  public $location;

  constructor(Car: any, $location: any) {
    /* tslint:disable */ 'ngInject'; /* tslint:enable */

    this.car = new Car();
    this.$location = $location;
  }

  save(car: any) {
    car.save().then(() => this.$location.path('/'));
  }
}

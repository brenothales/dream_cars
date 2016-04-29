export class CarsController {
  public list;

  constructor(Car: any) {
    /* tslint:disable */ 'ngInject'; /* tslint:enable */

    Car.query().then((cars: any) => this.list = cars);
  }
}

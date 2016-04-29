/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { CarsController } from './components/cars.controller';
import { CarsNewController } from './components/cars-new.controller';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module dreamCars {
  'use strict';

  angular.module('dreamCars', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'toastr',
    'rails'
  ]).config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('CarsController', CarsController)
    .controller('CarsNewController', CarsNewController)
    .factory('Car', (railsResourceFactory: any) => {
      return railsResourceFactory({
        url: '/api/cars',
        name: 'car'
      });
  }).config(($locationProvider: any) => $locationProvider.html5Mode(true));
}

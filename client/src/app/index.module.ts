/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CarsController } from './components/cars.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';

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
  ]).constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .controller('MainController', MainController)
    .controller('CarsController', CarsController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey)
    .factory('Car', (railsResourceFactory: any) => {
      return railsResourceFactory({
        url: '/api/cars',
        name: 'car'
      });
  }).config(($locationProvider: any) => $locationProvider.html5Mode(true));
}

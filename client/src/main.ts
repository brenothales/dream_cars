import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { DreamCarsAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(DreamCarsAppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]);

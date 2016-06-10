import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CarService {
  constructor(public http: Http) {
  }

  getCars() {
    return this.http.get('/api/cars.json')
  }
}

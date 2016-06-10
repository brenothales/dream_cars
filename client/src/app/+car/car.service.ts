import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CarService {
  constructor(public http: Http) {
  }

  getCars() {
    return this.http.get('/api/cars.json')
  }

  delete(id: number) {
    let body = JSON.stringify({ id: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete('/api/cars/' + id + '.json');
  }
}

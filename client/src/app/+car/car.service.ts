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
    return this.http.delete('/api/cars/' + id + '.json');
  }

  save(car, id) {
    let body = JSON.stringify({ car: car });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (id) {
      return this.http.patch('/api/cars/' + id + '.json', body, options);
    } else {
      return this.http.post('/api/cars.json', body, options);
    }
  }
}

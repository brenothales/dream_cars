import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.css']
})

export class CarComponent implements OnInit {
  cars: any;

  constructor(public http: Http, public router: Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.http.get('/api/cars.json')
      .subscribe(response => this.cars = response.json());
  }

  edit(id: number) {
    this.router.navigate(['/edit-car/' + id])
  }

  delete(id: number) {
    let body = JSON.stringify({ id: id });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.delete('/api/cars/' + id + '.json')
      .subscribe(response => this.load());
  }

  goToNew() {
    this.router.navigate(['/new-car'])
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from '../car';

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css']
})

export class CarFormComponent implements OnInit {
  @Input() id;

  car = new Car();
  constructor(public http: Http, public router: Router) {}

  ngOnInit() {
    if (this.id) {
      this.http.get('/api/cars/' + this.id + '.json')
        .subscribe(response => this.car = response.json());
    }
  }

  onSubmit() {
    let body = JSON.stringify({ car: this.car });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('/api/cars.json', body, options)
      .subscribe(response => this.router.navigate(['/car']));
  }

}

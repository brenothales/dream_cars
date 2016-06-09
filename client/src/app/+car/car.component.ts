import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
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
    this.http.get('/api/cars.json')
      .subscribe(response => this.cars = response.json());
  }

  goToNew() {
    this.router.navigate(['/new-car'])
  }
}

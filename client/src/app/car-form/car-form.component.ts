import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../+car/car.service'

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css'],
  providers: [CarService]
})

export class CarFormComponent implements OnInit {
  @Input() id;

  car = new Car();
  constructor(public http: Http,
              public router: Router,
              private carService: CarService) {}

  ngOnInit() {
    if (this.id) {
      this.http.get('/api/cars/' + this.id + '.json')
        .subscribe(response => this.car = response.json());
    }
  }

  onSubmit() {
    this.carService
        .save(this.car, this.id)
        .subscribe(response => this.router.navigate(['/car']));
  }

}

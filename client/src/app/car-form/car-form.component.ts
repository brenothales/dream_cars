import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Car } from '../car';

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css']
})
export class CarFormComponent implements OnInit {

  car = new Car(0, '2002', 'BMW', '325xi');
  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.car);
  }

}

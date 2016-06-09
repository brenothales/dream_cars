import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { CarFormComponent } from '../car-form'

@Component({
  moduleId: module.id,
  selector: 'app-new-car',
  templateUrl: 'new-car.component.html',
  styleUrls: ['new-car.component.css'],
  directives: [CarFormComponent]
})

export class NewCarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

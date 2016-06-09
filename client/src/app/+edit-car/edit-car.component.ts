import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { CarFormComponent } from '../car-form'

@Component({
  moduleId: module.id,
  selector: 'app-edit-car',
  templateUrl: 'edit-car.component.html',
  styleUrls: ['edit-car.component.css'],
  directives: [CarFormComponent]
})

export class EditCarComponent implements OnInit {
  id: string;

  constructor(public http: Http, public params: RouteSegment) {
  }

  ngOnInit() {
    this.id = this.params.getParam('id');
  }

}

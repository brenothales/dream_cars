import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { CarComponent } from './+car';
import { NewCarComponent } from './+new-car';
import { EditCarComponent } from './+edit-car';

@Component({
  moduleId: module.id,
  selector: 'dream-cars-app',
  templateUrl: 'dream-cars.component.html',
  styleUrls: ['dream-cars.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/car', component: CarComponent},
  {path: '/new-car', component: NewCarComponent},
  {path: '/edit-car/:id', component: EditCarComponent}
])
export class DreamCarsAppComponent {
  title = 'dream-cars works!';
}

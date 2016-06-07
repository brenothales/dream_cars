import { Component } from '@angular/core';
import { CarComponent } from './+car';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dream-cars-app',
  templateUrl: 'dream-cars.component.html',
  styleUrls: ['dream-cars.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/car', component: CarComponent}
])
export class DreamCarsAppComponent {
  title = 'dream-cars works!';
}

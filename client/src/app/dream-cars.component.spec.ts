import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DreamCarsAppComponent } from '../app/dream-cars.component';

beforeEachProviders(() => [DreamCarsAppComponent]);

describe('App: DreamCars', () => {
  it('should create the app',
      inject([DreamCarsAppComponent], (app: DreamCarsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dream-cars works!\'',
      inject([DreamCarsAppComponent], (app: DreamCarsAppComponent) => {
    expect(app.title).toEqual('dream-cars works!');
  }));
});

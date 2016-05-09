import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { By } from '@angular/platform-browser';
import { CarComponent } from './car.component';

describe('Component: Car', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CarComponent, HTTP_PROVIDERS]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CarComponent],
      (component: CarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(CarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-car></app-car>
  `,
  directives: [CarComponent]
})
class CarComponentTestController {
}

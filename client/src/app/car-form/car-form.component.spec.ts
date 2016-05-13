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
import { By } from '@angular/platform-browser';
import { CarFormComponent } from './car-form.component';

describe('Component: CarForm', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CarFormComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CarFormComponent],
      (component: CarFormComponent) => {
    expect(component).toBeTruthy();
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-car-form></app-car-form>
  `,
  directives: [CarFormComponent]
})
class CarFormComponentTestController {
}


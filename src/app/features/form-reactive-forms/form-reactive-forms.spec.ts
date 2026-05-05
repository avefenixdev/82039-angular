import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveForms } from './form-reactive-forms';

describe('FormReactiveForms', () => {
  let component: FormReactiveForms;
  let fixture: ComponentFixture<FormReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(FormReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

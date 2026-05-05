import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDriven } from './form-template-driven';

describe('FormTemplateDriven', () => {
  let component: FormTemplateDriven;
  let fixture: ComponentFixture<FormTemplateDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplateDriven],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTemplateDriven);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

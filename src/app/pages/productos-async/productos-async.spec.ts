import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAsync } from './productos-async';

describe('ProductosAsync', () => {
  let component: ProductosAsync;
  let fixture: ComponentFixture<ProductosAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosAsync],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosAsync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

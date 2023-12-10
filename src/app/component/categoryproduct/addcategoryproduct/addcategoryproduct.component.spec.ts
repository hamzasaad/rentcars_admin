import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoryproductComponent } from './addcategoryproduct.component';

describe('AddcategoryproductComponent', () => {
  let component: AddcategoryproductComponent;
  let fixture: ComponentFixture<AddcategoryproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcategoryproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategoryproductComponent } from './detailcategoryproduct.component';

describe('DetailcategoryproductComponent', () => {
  let component: DetailcategoryproductComponent;
  let fixture: ComponentFixture<DetailcategoryproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcategoryproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcategoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

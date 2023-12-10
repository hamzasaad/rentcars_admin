import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmarqueComponent } from './detailmarque.component';

describe('DetailmarqueComponent', () => {
  let component: DetailmarqueComponent;
  let fixture: ComponentFixture<DetailmarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailvoitureComponent } from './detailvoiture.component';

describe('DetailvoitureComponent', () => {
  let component: DetailvoitureComponent;
  let fixture: ComponentFixture<DetailvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmemberComponent } from './detailmember.component';

describe('DetailmemberComponent', () => {
  let component: DetailmemberComponent;
  let fixture: ComponentFixture<DetailmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailreclamationComponent } from './detailreclamation.component';

describe('DetailreclamationComponent', () => {
  let component: DetailreclamationComponent;
  let fixture: ComponentFixture<DetailreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

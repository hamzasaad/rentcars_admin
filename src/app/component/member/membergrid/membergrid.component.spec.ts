import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembergridComponent } from './membergrid.component';

describe('MembergridComponent', () => {
  let component: MembergridComponent;
  let fixture: ComponentFixture<MembergridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembergridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

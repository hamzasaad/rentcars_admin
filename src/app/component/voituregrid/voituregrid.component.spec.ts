import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoituregridComponent } from './voituregrid.component';

describe('VoituregridComponent', () => {
  let component: VoituregridComponent;
  let fixture: ComponentFixture<VoituregridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoituregridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituregridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

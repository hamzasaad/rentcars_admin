import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiturelistComponent } from './voiturelist.component';

describe('VoiturelistComponent', () => {
  let component: VoiturelistComponent;
  let fixture: ComponentFixture<VoiturelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiturelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

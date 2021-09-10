import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoC2Component } from './hijo-c2.component';

describe('HijoC2Component', () => {
  let component: HijoC2Component;
  let fixture: ComponentFixture<HijoC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

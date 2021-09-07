import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola7Component } from './hola7.component';

describe('Hola7Component', () => {
  let component: Hola7Component;
  let fixture: ComponentFixture<Hola7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

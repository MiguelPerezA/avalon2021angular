import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola4Component } from './hola4.component';

describe('Hola4Component', () => {
  let component: Hola4Component;
  let fixture: ComponentFixture<Hola4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola6Component } from './hola6.component';

describe('Hola6Component', () => {
  let component: Hola6Component;
  let fixture: ComponentFixture<Hola6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

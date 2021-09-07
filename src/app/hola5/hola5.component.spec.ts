import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola5Component } from './hola5.component';

describe('Hola5Component', () => {
  let component: Hola5Component;
  let fixture: ComponentFixture<Hola5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

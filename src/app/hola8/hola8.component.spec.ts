import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola8Component } from './hola8.component';

describe('Hola8Component', () => {
  let component: Hola8Component;
  let fixture: ComponentFixture<Hola8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

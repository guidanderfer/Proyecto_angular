import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoCarritoComponent } from './proyecto-carrito.component';

describe('ProyectoCarritoComponent', () => {
  let component: ProyectoCarritoComponent;
  let fixture: ComponentFixture<ProyectoCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

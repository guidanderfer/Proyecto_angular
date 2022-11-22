import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoSucursalesComponent } from './proyecto-sucursales.component';

describe('ProyectoSucursalesComponent', () => {
  let component: ProyectoSucursalesComponent;
  let fixture: ComponentFixture<ProyectoSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoSucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

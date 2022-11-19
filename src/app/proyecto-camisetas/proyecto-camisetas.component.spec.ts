import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoCamisetasComponent } from './proyecto-camisetas.component';

describe('ProyectoCamisetasComponent', () => {
  let component: ProyectoCamisetasComponent;
  let fixture: ComponentFixture<ProyectoCamisetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoCamisetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoCamisetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

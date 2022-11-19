import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoAboutComponent } from './proyecto-about.component';

describe('ProyectoAboutComponent', () => {
  let component: ProyectoAboutComponent;
  let fixture: ComponentFixture<ProyectoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

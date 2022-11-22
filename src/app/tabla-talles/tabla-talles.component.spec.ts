import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTallesComponent } from './tabla-talles.component';

describe('TablaTallesComponent', () => {
  let component: TablaTallesComponent;
  let fixture: ComponentFixture<TablaTallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

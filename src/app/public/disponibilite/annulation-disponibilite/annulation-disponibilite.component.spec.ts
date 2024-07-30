import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulationDisponibiliteComponent } from './annulation-disponibilite.component';

describe('AnnulationDisponibiliteComponent', () => {
  let component: AnnulationDisponibiliteComponent;
  let fixture: ComponentFixture<AnnulationDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulationDisponibiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulationDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvelleDisponibiliteComponent } from './renouvelle-disponibilite.component';

describe('RenouvelleDisponibiliteComponent', () => {
  let component: RenouvelleDisponibiliteComponent;
  let fixture: ComponentFixture<RenouvelleDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenouvelleDisponibiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenouvelleDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

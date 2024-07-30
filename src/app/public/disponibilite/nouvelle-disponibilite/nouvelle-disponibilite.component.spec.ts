import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDisponibiliteComponent } from './nouvelle-disponibilite.component';

describe('NouvelleDisponibiliteComponent', () => {
  let component: NouvelleDisponibiliteComponent;
  let fixture: ComponentFixture<NouvelleDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleDisponibiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

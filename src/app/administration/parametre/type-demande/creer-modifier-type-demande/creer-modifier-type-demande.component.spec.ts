import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerModifierTypeDemandeComponent } from './creer-modifier-type-demande.component';

describe('CreerModifierTypeDemandeComponent', () => {
  let component: CreerModifierTypeDemandeComponent;
  let fixture: ComponentFixture<CreerModifierTypeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerModifierTypeDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerModifierTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

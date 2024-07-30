import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerModifierCircuitComponent } from './creer-modifier-circuit.component';

describe('CreerModifierCircuitComponent', () => {
  let component: CreerModifierCircuitComponent;
  let fixture: ComponentFixture<CreerModifierCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerModifierCircuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerModifierCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

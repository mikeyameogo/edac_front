import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerModifierTypeStructureComponent } from './creer-modifier-type-structure.component';

describe('CreerModifierTypeStructureComponent', () => {
  let component: CreerModifierTypeStructureComponent;
  let fixture: ComponentFixture<CreerModifierTypeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerModifierTypeStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerModifierTypeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

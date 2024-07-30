import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerModifierStructureComponent } from './creer-modifier-structure.component';

describe('CreerModifierStructureComponent', () => {
  let component: CreerModifierStructureComponent;
  let fixture: ComponentFixture<CreerModifierStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerModifierStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerModifierStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

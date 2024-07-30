import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectificationDisponibiliteComponent } from './rectification-disponibilite.component';

describe('RectificationDisponibiliteComponent', () => {
  let component: RectificationDisponibiliteComponent;
  let fixture: ComponentFixture<RectificationDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectificationDisponibiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectificationDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

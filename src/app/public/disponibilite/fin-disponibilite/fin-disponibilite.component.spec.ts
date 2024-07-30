import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDisponibiliteComponent } from './fin-disponibilite.component';

describe('FinDisponibiliteComponent', () => {
  let component: FinDisponibiliteComponent;
  let fixture: ComponentFixture<FinDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinDisponibiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

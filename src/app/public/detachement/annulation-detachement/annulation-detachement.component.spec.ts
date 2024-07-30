import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulationDetachementComponent } from './annulation-detachement.component';

describe('AnnulationDetachementComponent', () => {
  let component: AnnulationDetachementComponent;
  let fixture: ComponentFixture<AnnulationDetachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulationDetachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnulationDetachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

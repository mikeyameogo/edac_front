import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCircuitComponent } from './details-circuit.component';

describe('DetailsCircuitComponent', () => {
  let component: DetailsCircuitComponent;
  let fixture: ComponentFixture<DetailsCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCircuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

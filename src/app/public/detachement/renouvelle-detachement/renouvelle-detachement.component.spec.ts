import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenouvelleDetachementComponent } from './renouvelle-detachement.component';

describe('RenouvelleDetachementComponent', () => {
  let component: RenouvelleDetachementComponent;
  let fixture: ComponentFixture<RenouvelleDetachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenouvelleDetachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenouvelleDetachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeDemandeComponent } from './detail-type-demande.component';

describe('DetailTypeDemandeComponent', () => {
  let component: DetailTypeDemandeComponent;
  let fixture: ComponentFixture<DetailTypeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTypeDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

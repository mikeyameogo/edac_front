import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDetachementComponent } from './nouvelle-detachement.component';

describe('NouvelleDetachementComponent', () => {
  let component: NouvelleDetachementComponent;
  let fixture: ComponentFixture<NouvelleDetachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleDetachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleDetachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

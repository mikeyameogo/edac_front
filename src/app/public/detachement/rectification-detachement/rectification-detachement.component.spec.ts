import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectificationDetachementComponent } from './rectification-detachement.component';

describe('RectificationDetachementComponent', () => {
  let component: RectificationDetachementComponent;
  let fixture: ComponentFixture<RectificationDetachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectificationDetachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectificationDetachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

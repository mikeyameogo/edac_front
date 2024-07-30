import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDetachementComponent } from './fin-detachement.component';

describe('FinDetachementComponent', () => {
  let component: FinDetachementComponent;
  let fixture: ComponentFixture<FinDetachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinDetachementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinDetachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

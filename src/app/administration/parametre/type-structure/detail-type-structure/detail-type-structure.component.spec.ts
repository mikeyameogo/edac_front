import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeStructureComponent } from './detail-type-structure.component';

describe('DetailTypeStructureComponent', () => {
  let component: DetailTypeStructureComponent;
  let fixture: ComponentFixture<DetailTypeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTypeStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTypeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

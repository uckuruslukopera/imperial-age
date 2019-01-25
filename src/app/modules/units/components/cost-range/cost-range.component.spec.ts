import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostRangeComponent } from './cost-range.component';

describe('CostRangeComponent', () => {
  let component: CostRangeComponent;
  let fixture: ComponentFixture<CostRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

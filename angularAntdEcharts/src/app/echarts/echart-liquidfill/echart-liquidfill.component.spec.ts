import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartLiquidfillComponent } from './echart-liquidfill.component';

describe('EchartLiquidfillComponent', () => {
  let component: EchartLiquidfillComponent;
  let fixture: ComponentFixture<EchartLiquidfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartLiquidfillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartLiquidfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

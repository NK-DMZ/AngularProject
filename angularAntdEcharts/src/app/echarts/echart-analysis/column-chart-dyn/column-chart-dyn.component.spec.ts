import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChartDynComponent } from './column-chart-dyn.component';

describe('ColumnChartDynComponent', () => {
  let component: ColumnChartDynComponent;
  let fixture: ComponentFixture<ColumnChartDynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnChartDynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChartDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

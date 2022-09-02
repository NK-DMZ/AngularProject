import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryColumnChartComponent } from './country-column-chart.component';

describe('CountryColumnChartComponent', () => {
  let component: CountryColumnChartComponent;
  let fixture: ComponentFixture<CountryColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryColumnChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

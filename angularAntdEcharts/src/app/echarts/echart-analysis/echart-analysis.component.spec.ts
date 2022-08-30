import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartAnalysisComponent } from './echart-analysis.component';

describe('EchartAnalysisComponent', () => {
  let component: EchartAnalysisComponent;
  let fixture: ComponentFixture<EchartAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

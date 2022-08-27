import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartChildComponent } from './echart-child.component';

describe('EchartChildComponent', () => {
  let component: EchartChildComponent;
  let fixture: ComponentFixture<EchartChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

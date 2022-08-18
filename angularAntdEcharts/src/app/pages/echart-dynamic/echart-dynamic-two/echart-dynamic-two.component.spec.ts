import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartDynamicTwoComponent } from './echart-dynamic-two.component';

describe('EchartDynamicTwoComponent', () => {
  let component: EchartDynamicTwoComponent;
  let fixture: ComponentFixture<EchartDynamicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartDynamicTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartDynamicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

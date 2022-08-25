import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartDynamicOneComponent } from './echart-dynamic-one.component';

describe('EchartDynamicOneComponent', () => {
  let component: EchartDynamicOneComponent;
  let fixture: ComponentFixture<EchartDynamicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartDynamicOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartDynamicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

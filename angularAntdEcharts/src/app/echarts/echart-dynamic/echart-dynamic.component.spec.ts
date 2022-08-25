import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartDynamicComponent } from './echart-dynamic.component';

describe('EchartDynamicComponent', () => {
  let component: EchartDynamicComponent;
  let fixture: ComponentFixture<EchartDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartDirectiveComponent } from './echart-directive.component';

describe('EchartDirectiveComponent', () => {
  let component: EchartDirectiveComponent;
  let fixture: ComponentFixture<EchartDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartUseComponent } from './echart-use.component';

describe('EchartUseComponent', () => {
  let component: EchartUseComponent;
  let fixture: ComponentFixture<EchartUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

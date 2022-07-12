import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EctartsTestComponent } from './ectarts-test.component';

describe('EctartsTestComponent', () => {
  let component: EctartsTestComponent;
  let fixture: ComponentFixture<EctartsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EctartsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EctartsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

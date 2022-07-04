import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomActionsHelpComponent } from './dom-actions-help.component';

describe('DomActionsHelpComponent', () => {
  let component: DomActionsHelpComponent;
  let fixture: ComponentFixture<DomActionsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomActionsHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomActionsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

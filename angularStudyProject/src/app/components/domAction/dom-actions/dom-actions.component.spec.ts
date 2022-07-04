import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomActionsComponent } from './dom-actions.component';

describe('DomActionsComponent', () => {
  let component: DomActionsComponent;
  let fixture: ComponentFixture<DomActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

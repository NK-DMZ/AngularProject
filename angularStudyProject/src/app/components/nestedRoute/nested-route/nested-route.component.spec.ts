import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRouteComponent } from './nested-route.component';

describe('NestedRouteComponent', () => {
  let component: NestedRouteComponent;
  let fixture: ComponentFixture<NestedRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

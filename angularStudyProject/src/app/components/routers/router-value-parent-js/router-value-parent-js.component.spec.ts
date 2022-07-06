import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterValueParentJsComponent } from './router-value-parent-js.component';

describe('RouterValueParentJsComponent', () => {
  let component: RouterValueParentJsComponent;
  let fixture: ComponentFixture<RouterValueParentJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterValueParentJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterValueParentJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

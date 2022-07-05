import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterValueChildDynamicComponent } from './router-value-child-dynamic.component';

describe('RouterValueChildDynamicComponent', () => {
  let component: RouterValueChildDynamicComponent;
  let fixture: ComponentFixture<RouterValueChildDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterValueChildDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterValueChildDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

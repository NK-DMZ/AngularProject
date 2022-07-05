import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterValueParentComponent } from './router-value-parent.component';

describe('RouterValueParentComponent', () => {
  let component: RouterValueParentComponent;
  let fixture: ComponentFixture<RouterValueParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterValueParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterValueParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

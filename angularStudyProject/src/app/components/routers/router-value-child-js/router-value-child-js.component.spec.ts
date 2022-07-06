import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterValueChildJsComponent } from './router-value-child-js.component';

describe('RouterValueChildJsComponent', () => {
  let component: RouterValueChildJsComponent;
  let fixture: ComponentFixture<RouterValueChildJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterValueChildJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterValueChildJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

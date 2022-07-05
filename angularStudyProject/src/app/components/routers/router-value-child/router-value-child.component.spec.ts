import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterValueChildComponent } from './router-value-child.component';

describe('RouterValueChildComponent', () => {
  let component: RouterValueChildComponent;
  let fixture: ComponentFixture<RouterValueChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterValueChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterValueChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

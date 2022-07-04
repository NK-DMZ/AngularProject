import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUseComponent } from './route-use.component';

describe('RouteUseComponent', () => {
  let component: RouteUseComponent;
  let fixture: ComponentFixture<RouteUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

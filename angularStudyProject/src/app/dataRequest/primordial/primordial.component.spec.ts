import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimordialComponent } from './primordial.component';

describe('PrimordialComponent', () => {
  let component: PrimordialComponent;
  let fixture: ComponentFixture<PrimordialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimordialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimordialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

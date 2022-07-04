import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentThreeComponent } from './parent-three.component';

describe('ParentThreeComponent', () => {
  let component: ParentThreeComponent;
  let fixture: ComponentFixture<ParentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

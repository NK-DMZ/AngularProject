import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentThreeComponent } from './my-component-three.component';

describe('MyComponentThreeComponent', () => {
  let component: MyComponentThreeComponent;
  let fixture: ComponentFixture<MyComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

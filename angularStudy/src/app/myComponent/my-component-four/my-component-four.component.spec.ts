import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentFourComponent } from './my-component-four.component';

describe('MyComponentFourComponent', () => {
  let component: MyComponentFourComponent;
  let fixture: ComponentFixture<MyComponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynWayComponent } from './asyn-way.component';

describe('AsynWayComponent', () => {
  let component: AsynWayComponent;
  let fixture: ComponentFixture<AsynWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

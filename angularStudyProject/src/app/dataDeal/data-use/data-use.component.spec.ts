import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUseComponent } from './data-use.component';

describe('DataUseComponent', () => {
  let component: DataUseComponent;
  let fixture: ComponentFixture<DataUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

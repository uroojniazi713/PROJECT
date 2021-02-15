import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecondTaskComponent } from './add-second-task.component';

describe('AddSecondTaskComponent', () => {
  let component: AddSecondTaskComponent;
  let fixture: ComponentFixture<AddSecondTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecondTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

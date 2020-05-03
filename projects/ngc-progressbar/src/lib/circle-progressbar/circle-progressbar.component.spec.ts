import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressbarComponent } from './circle-progressbar.component';

describe('CircleProgressbarComponent', () => {
  let component: CircleProgressbarComponent;
  let fixture: ComponentFixture<CircleProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

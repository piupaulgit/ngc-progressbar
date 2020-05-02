import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcProgressbarComponent } from './ngc-progressbar.component';

describe('NgcProgressbarComponent', () => {
  let component: NgcProgressbarComponent;
  let fixture: ComponentFixture<NgcProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

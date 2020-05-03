import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineProgressbarComponent } from './line-progressbar.component';

describe('LineProgressbarComponent', () => {
  let component: LineProgressbarComponent;
  let fixture: ComponentFixture<LineProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

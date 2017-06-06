import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEventsComponent } from './svg-events.component';

describe('SvgEventsComponent', () => {
  let component: SvgEventsComponent;
  let fixture: ComponentFixture<SvgEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

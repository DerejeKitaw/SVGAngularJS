import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgOneChildComponent } from './svg-one-child.component';

describe('SvgOneChildComponent', () => {
  let component: SvgOneChildComponent;
  let fixture: ComponentFixture<SvgOneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgOneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

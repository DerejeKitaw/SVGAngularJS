import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgOneComponent } from './svg-one.component';

describe('SvgOneComponent', () => {
  let component: SvgOneComponent;
  let fixture: ComponentFixture<SvgOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

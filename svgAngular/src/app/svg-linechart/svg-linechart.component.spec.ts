import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinechartComponent } from './svg-linechart.component';

describe('SvgLinechartComponent', () => {
  let component: SvgLinechartComponent;
  let fixture: ComponentFixture<SvgLinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgLinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

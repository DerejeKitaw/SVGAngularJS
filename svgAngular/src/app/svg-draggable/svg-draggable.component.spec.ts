import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDraggableComponent } from './svg-draggable.component';

describe('SvgDraggableComponent', () => {
  let component: SvgDraggableComponent;
  let fixture: ComponentFixture<SvgDraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

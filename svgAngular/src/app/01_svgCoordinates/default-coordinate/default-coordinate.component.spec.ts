import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCoordinateComponent } from './default-coordinate.component';

describe('DefaultCoordinateComponent', () => {
  let component: DefaultCoordinateComponent;
  let fixture: ComponentFixture<DefaultCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

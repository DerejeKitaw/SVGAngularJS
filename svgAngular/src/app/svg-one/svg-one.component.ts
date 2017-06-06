import { Component, OnInit } from '@angular/core';
import { SvgOneChildComponent } from '../svg-one-child/svg-one-child.component';
@Component({
  selector: 'svg-one',
  templateUrl: './svg-one.component.html',
  styleUrls: ['./svg-one.component.css']
})
export class SvgOneComponent implements OnInit {
    width : number=500;
    height : number;

  constructor() { }

  ngOnInit() {
  }

}

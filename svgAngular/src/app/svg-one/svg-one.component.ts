import { Component, OnInit, ViewChild } from '@angular/core';
import { SvgOneChildComponent } from '../svg-one-child/svg-one-child.component';
@Component({
  selector: 'svg-one',
  templateUrl: './svg-one.component.html',
  styleUrls: ['./svg-one.component.css']
})
export class SvgOneComponent implements OnInit {
    viewbox_width : number=200 ;
    viewbox_height : number=200;
    rect_width : number=50 ;
    rect_height : number=50;
    
  //make accesable to svg element
  @ViewChild("svgelement") svgElm : any;

  constructor() { }

  ngOnInit() {
  }
/** 
     * Get viewbox based on element width / height
     */
    public getViewbox() : string {           
        return "0 0 "+
            this.viewbox_width +" "+
            this.viewbox_height;
    }
}

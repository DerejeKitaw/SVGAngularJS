import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'svg-draggable',
  templateUrl: './svg-draggable.component.html',
  styleUrls: ['./svg-draggable.component.css']
})
export class SvgDraggableComponent implements OnInit {
viewbox_width: number = 400;
  viewbox_height: number = 400;
  rect_width: number = 50;
  rect_height: number = 50;
  dots: any[] = [
    {
      "x": "78",
      "y_label": "15",
      "y_levation": "15",
      "class": "black",
      "label": "black"
    },
    {
      "x": "50",
      "y_label": "35",
      "y_levation": "30",
      "class": "green",
      "label": "Green"
    }
    ,
    {
      "x": "45",
      "y_label": "65",
      "y_levation": "60",
      "class": "red",
      "label": "Red"
    }
  ];
  draw:boolean=false;
  startPoint:boolean=true;
  continueDraw=false;
  startX1=""
  startY1=""
  endX1=""
  endY1=""
 coord: any[] = [
    {
      "x1":"100", "y1":"100", "x2":"100" ,"y2":"400"
    }
    // ,
    // {

    // "x1":"100", "y1":"400", "x2":"400", "y2":"400"
    // },
    // {

    // "x1":"400", "y1":"400", "x2":"400", "y2":"100"
    // }
   
  ];
  points: any[] = [
    {"points":"232 151 456 154 651 386 927 385"}
  ];
  //make accesable to svg element
  @ViewChild("svgelement") svgElm: any;

  constructor() { }

  ngOnInit() {
  }
  /** 
       * Get viewbox based on element width / height
       */
  public getViewbox(): string {
    return "0 0 " +
      this.viewbox_width + " " +
      this.viewbox_height;
  }
  cliceMe(el:Event){
    console.log(el["clientX"]);
if(this.startPoint){
  this.startX1=el["clientX"];
  this.startY1=el["clientY"];
  this.startPoint=false;
  this.draw=false;
  this.continueDraw=true;
}
// if(!this.startPoint){
//   this.endX1=el["clientX"];
//   this.endY1=el["clientY"];
//   this.draw=true;
// }
if(this.continueDraw){
 this.startX1= this.endX1;
  this.startY1=this.endY1;
   this.endX1=el["clientX"];
  this.endY1=el["clientY"];
}
    if(this.draw){

    this.coord.push( {
        "x1":this.startX1, "y1":this.startY1, "x2": this.endX1, "y2": this.endY1
       //"x1":el["clientX"], "y1":el["clientY"], "x2":"100", "y2":"100"
    });
    }
  }
}
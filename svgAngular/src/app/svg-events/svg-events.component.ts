import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svg-events',
  templateUrl: './svg-events.component.html',
  styleUrls: ['./svg-events.component.css']
})
export class SvgEventsComponent implements OnInit {
 dots: any[] = [
    {
      "x": "50",
      "y_label": "15",
      "y_levation": "15",
      "class": "black",
      "label":"black"
    },
     {
      "x": "50",
      "y_label": "35",
      "y_levation": "30",
      "class": "green",
      "label":"Green"
    }
    ,
     {
      "x": "45",
      "y_label": "65",
      "y_levation": "60",
      "class": "red",
      "label":"Red"
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  public dragCircle(evt : Event) {
        evt.preventDefault();
console.log(evt);
}
}

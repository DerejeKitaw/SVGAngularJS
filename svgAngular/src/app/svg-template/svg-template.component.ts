import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svg-template',
  templateUrl: './svg-template.component.html',
  styleUrls: ['./svg-template.component.css']
})
export class SvgTemplateComponent implements OnInit {
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
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'default-coordinate',
  templateUrl: './default-coordinate.component.html',
  styleUrls: ['./default-coordinate.component.css']
})
export class DefaultCoordinateComponent implements OnInit {
imageUrl="./pixel_ruler.svg";
  constructor() { }

  ngOnInit() {
  }

}

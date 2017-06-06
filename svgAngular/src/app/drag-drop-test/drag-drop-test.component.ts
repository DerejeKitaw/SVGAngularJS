import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drag-drop-test',
  templateUrl: './drag-drop-test.component.html',
  styleUrls: ['./drag-drop-test.component.css']
})
export class DragDropTestComponent implements OnInit {
dropZone='Drop Zone';
  constructor() { }

  ngOnInit() {
  }
  drag_handler(ev) {
    console.log("Drag");
    //console.log(ev);
  }

  dragstart_handler(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop_handler(ev) {
    console.log("Drop******");
    ev.currentTarget.style.background = "lightyellow";

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
     ev.target.appendChild(document.getElementById(data));
  }

  dragover_handler(ev) {
    console.log("dragOver");
    this.dropZone="Drop it here";
    ev.preventDefault();
  }
  dragleave_handler(ev) {
    console.log("dragleave");
    this.dropZone="Please dont GO";
    ev.preventDefault();
  }
}

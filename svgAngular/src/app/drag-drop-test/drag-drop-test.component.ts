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
    // console.log(ev);
  }

  dragstart_handler(ev) {
    console.log("dragStart");
    // Identify what is draggable
    ev.dataTransfer.setData("text/plain", ev.target.id);
    
    // Define the drag's data
    ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
    ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
  
    // Define the drag image
    var img = new Image(); 
    img.src = './src/app/drag-drop-test/dkitaw.png'; 
    ev.dataTransfer.setDragImage(img, 10, 10);

    // Define the drag effect
    ev.dataTransfer.dropEffect="copy";
}

  drop_handler(ev) {
    console.log("Drop******");
    console.log(ev.dataTransfer);
    ev.currentTarget.style.background = "lightyellow";

    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
     ev.target.appendChild(document.getElementById(data));
  }

  dragover_handler(ev) {
    console.log("dragOver");
    this.dropZone="Drop it here";
    // Define a drop zone
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"

  }
  dragleave_handler(ev) {
    console.log("dragleave");
    this.dropZone="Please dont GO";
    ev.preventDefault();
  }
}

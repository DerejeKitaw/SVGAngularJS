import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { DragService } from "app/drag.service";

@Directive({
  selector: '[svgDraggable]'
})
export class SvgDraggableDirective {
  constructor(private dragService: DragService) {
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set myDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {} } = this.options;

    this.dragService.startDrag(zone);

    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
}
export interface DraggableOptions {
  zone?: string;
  data?: any;
}
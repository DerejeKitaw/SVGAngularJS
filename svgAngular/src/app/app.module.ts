import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgLinechartComponent } from './svg-linechart/svg-linechart.component';
import { SvgOneComponent } from './svg-one/svg-one.component';
import { SvgOneChildComponent } from './svg-one-child/svg-one-child.component';
import { SvgTemplateComponent } from './svg-template/svg-template.component';
import { SvgEventsComponent } from './svg-events/svg-events.component';
import { SvgDraggableDirective } from './svg-draggable.directive';
import { DragService } from "app/drag.service";
import { SvgDropTargetDirective } from './svg-drop-target.directive';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';
import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    SvgLinechartComponent,
    SvgOneComponent,
    SvgOneChildComponent,
    SvgTemplateComponent,
    SvgEventsComponent,
    SvgDraggableDirective,
    SvgDropTargetDirective,
    DragDropTestComponent,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }

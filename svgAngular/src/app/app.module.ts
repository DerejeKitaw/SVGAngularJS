import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SvgLinechartComponent } from './svg-linechart/svg-linechart.component';
import { SvgOneComponent } from './svg-one/svg-one.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgLinechartComponent,
    SvgOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

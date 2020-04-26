import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatabindingexComponent } from './databindingex/databindingex.component';
import { ListItemAComponent } from './list-item-a/list-item-a.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,DatabindingexComponent,ListItemAComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

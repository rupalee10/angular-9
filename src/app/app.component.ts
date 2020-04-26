import { Component } from '@angular/core';
import {Countries} from './dataList';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular2';
  currentList=[{}];

  
  addItem(allitem){
  //  this.currentList.push(allitem);
  console.log("received value",allitem);
  this.currentList.push(allitem);
  console.log(Countries);
  }
}

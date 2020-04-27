import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Countries} from '../dataList';

@Component({
  selector: 'app-list-item-a',
  templateUrl: './list-item-a.component.html',
  styleUrls: ['./list-item-a.component.css']
})
export class ListItemAComponent implements OnInit {

  country =Countries;
  @Input() selected: string;
  @Output() valueChange = new EventEmitter();
  selectedItem;
  currentList=[];

  

  constructor() {
    //console.log(selected);
   }

  ngOnInit(): void {
  }

  moveToLeft(event,newValue){
    console.log(event.target.innerTexti);
    this.selectedItem = newValue; 
    this.valueChange.emit(this.selectedItem);

  }
  addItem(){
    this.valueChange.emit(this.selectedItem);
  }
}

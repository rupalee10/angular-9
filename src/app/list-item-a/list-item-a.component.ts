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
  errorMsg="";
  slectedItemB;
  currentList=[];
  tmpList =[];
  selectedValue;
  currentIndex:Number;
  constructor() {

   }

  ngOnInit(): void {
  }

  moveToLeft(event,newValue){
    this.selectedItem = newValue; 
  }
  moveToRight(event,newOne,index){
    this.currentIndex=index;
    this.slectedItemB = newOne; 
    console.log(this.currentIndex);
  }

  addItem(){
     // this.valueChange.emit(this.selectedItem);
     if(this.currentList.includes(this.selectedItem)){
         this.errorMsg = "Already added";
     }
      else{
        this.currentList.push(this.selectedItem);
      }
  
  }

  removeItem(i){

    if(typeof this.currentList !== 'undefined' && this.currentList.length > 0){
        let newItems = this.currentList.filter(function(e, index){
          return i != index; 
        })
        this.currentList =  newItems;
     }
     else
     this.errorMsg = "List B is empty!!Add Element";
  }

  removeAll(){
    if(typeof this.currentList !== 'undefined' && this.currentList.length > 0){
        this.currentList=[];
    }
    else{
      this.errorMsg = "List B is empty!!Add Element";
    }
  }

  addAll(){
    this.currentList = this.country;
  }
}

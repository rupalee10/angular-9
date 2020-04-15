import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingex',
  templateUrl: './databindingex.component.html',
  styleUrls: ['./databindingex.component.css']
})
export class DatabindingexComponent implements OnInit {

  username='';
  btnStatus=false;
  serverCreationstatus="No server created ";

  constructor() { 
    setTimeout(()=>{
      this.btnStatus=true;
    },4000)
  }

  ngOnInit(): void {
  }

  resetUser(){
    this.username="";
  }
  
  
}

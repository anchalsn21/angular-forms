import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
savedData:any=[]
  ngOnInit() {
    this.setData()
  }
  setData(){
    let data=[]
    let local=JSON.parse(localStorage.getItem("savedData"))
    if(local) data=local;

    this.savedData=data
  }

}

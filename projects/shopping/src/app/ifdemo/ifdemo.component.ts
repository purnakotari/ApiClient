import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any={
    name:"NikeShoes",
    price:4000,
    preview:"assets/shoes.jpg"
  }
  public isvisable:boolean=false;
  public btntext:string='show';
  show(){
   this.isvisable=(this.isvisable==false)?true:false;
   this.btntext=(this.btntext=='show')? 'hide':'show'
  }

}

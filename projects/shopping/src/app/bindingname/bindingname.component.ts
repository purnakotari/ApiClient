import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingname',
  templateUrl: './bindingname.component.html',
  styleUrls: ['./bindingname.component.css']
})
export class BindingnameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name:string="Lgtv";
  public price:number=20000;
  public city:string= ""; 
  public stock:boolean=true;
}

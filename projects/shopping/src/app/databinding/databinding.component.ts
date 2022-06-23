import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

  public countryName:string="USA";
  public selectCountry:string="";

 public  onchange(e:any) {

  console.log(e.target.value);
  

  }

}

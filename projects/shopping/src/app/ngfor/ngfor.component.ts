import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public persondetalies:any=[
    {name:"purna",city:"hyderabad"},
    {name:"srinu", city:"mumbi"},
    {name:"sandeep", city:"kerala"},
    {name:"venki", city:"Bengulore"},
    {name:"anji", city:"up"}
]

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

 detalies:any=[]


  constructor(private http:HttpClient) { }


  ngOnInit(): void {
 
  var data=  this.http.get("http://jsonplaceholder.typicode.com/posts");
  data.subscribe(
    (response)=>{
      this.detalies=response;
    }
  )

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})
export class ApidemoComponent implements OnInit {

  productdetalies:any=[];
    
 



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
    var data=this.http.get("http://jsonplaceholder.typicode.com/posts");
    data.subscribe(
      (response)=>{
        this.productdetalies=response;
      }
    )
     

  }

}

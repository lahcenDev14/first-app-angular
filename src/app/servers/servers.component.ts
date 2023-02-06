import { Component, OnInit } from '@angular/core';

@Component({
   //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  
  allowbutton = false;
 constructor (){

  setTimeout(()=>
  {
    this.allowbutton = true;

  },2000);

 }
 ngOnInit(){

 }
}

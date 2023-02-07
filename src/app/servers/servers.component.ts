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
  servercreatedstatus = 'server not created';
  NameServer = '';
  username ='';
  servercreated = false;

 constructor (){

  setTimeout(()=>
  {
    this.allowbutton = true;

  },2000);

 }
 ngOnInit(){

 }


 oncreateserver()
 {
  
    this.servercreated = true;
    this.servercreatedstatus = ' the name of the server'+this.NameServer;
 }
 
 onupdateservername(event : Event)
 {
   this.NameServer = (<HTMLInputElement>event.target).value;
 }
 viderusername(){

  this.username = "";
 }

}

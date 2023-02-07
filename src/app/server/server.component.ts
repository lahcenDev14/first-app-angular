import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']
})
export class ServerComponent{

    serverid : number = 10;
    serverstatus : string = 'offline';

    random = Math.random();

    constructor()
    {
      this.serverstatus = this.random > 0.5 ? 'onligne' : 'offline';
    }
  
  
    getColor() {

      return this.serverstatus === 'onligne' ? 'green' : 'red';

    }
  

}
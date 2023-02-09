import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type : 'blueprint',name:'test server',content:'sahjh'}];


  

  onServerAdded(serverData : {serverNam : string,serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverNam,
      content: serverData.serverContent
    });
  }

  onblueprintAdded(blueprintData : {blueprintName : string, blueprintContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }



}

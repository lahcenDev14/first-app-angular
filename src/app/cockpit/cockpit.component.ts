import { Component, Output, EventEmitter } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() ServerCreated = new EventEmitter<{serverNam : string,serverContent : string}>();
  @Output() bluePrintCreated = new EventEmitter<{blueprintName : string, blueprintContent : string}>();
   

  newServerName = '';
  newServerContent = '';


  onAddServer() {
    this.ServerCreated.emit({
      serverNam : this.newServerName,
      serverContent : this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      blueprintName : this.newServerName,
      blueprintContent : this.newServerContent
    });
  }


}

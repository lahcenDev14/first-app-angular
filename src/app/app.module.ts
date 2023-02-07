import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertWarning } from './alert-warning/alert-warning.component';
import { AlertSuccesComponent } from './alert-succes/alert-succes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertWarning,
    AlertSuccesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

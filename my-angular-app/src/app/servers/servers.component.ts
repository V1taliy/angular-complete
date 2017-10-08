import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//  template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName = 'TestServer';
yearsStatus = "your age not allowed";
yearsOld = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }
onCreateServer() {
  this.serverCreationStatus = 'Server was created! Name is ' +this.serverName;
}
onUpdateServerName(event: Event) {
this.serverName = (<HTMLInputElement>event.target).value;
}
onAgeEnter() {
    this.yearsStatus = "Your age good" + this.yearsOld;


}
}

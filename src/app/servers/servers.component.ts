import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no servers was created';
  serverName = 'haha';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'there is servers was created';
  }

  onUpdateServerName(event: Event): any {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

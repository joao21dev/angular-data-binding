import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allowServer: boolean = false;
  serverName: string = '';
  serverCreated: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverStatus: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created';
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus(): string {
    return (this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline');
  }

  getColor(): string {
    if (this.serverStatus === 'online') {
      return 'green';
    } else {
      return 'red';
    }
  }
}

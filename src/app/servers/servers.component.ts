import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // the navigate method can take an optional 2nd argument
    // with a built in relativeTo that tells angular what to make the '/servers' path
    //relative to. This enables the navigate method to behave like  the template routerLink
    // where we get /servers/servers instead of just /servers
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}

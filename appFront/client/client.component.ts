import { Component, OnInit } from '@angular/core';
import { CaddyService } from '../services/caddy.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public caddyService: CaddyService) { }

  ngOnInit(): void {
  }

}

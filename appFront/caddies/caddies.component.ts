import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { CaddyService } from '../services/caddy.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.css']
})
export class CaddiesComponent implements OnInit {
  added: number = 0;
  message: String = "";

  constructor(
    public caddyService: CaddyService,
    private router:Router,
    public catService:CatalogueService) { }

  ngOnInit(): void {}
  
  onNewOrder() {
    this.router.navigateByUrl('/client');
  }

  addCommande(value: Client) {
    this.caddyService.addCommande(value).subscribe((data) => {
      this.added++;
      this.message = 'La commande a été ajouté avec succès.';
    },(err) => {
      console.log(err);
    });
  }

}

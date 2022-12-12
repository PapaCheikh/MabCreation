import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { AuthService } from '../services/auth.service';
import { CaddyService } from '../services/caddy.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any;
  currentCategorie: any;

  constructor(
    public catService:CatalogueService,
    private  router:Router,
    public authService: AuthService,
    public caddyService: CaddyService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.catService.getResource(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
  }

  onSelectedProducts() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/home");
  }

  getProductsByCat(c: any) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }

  getProductsPromotion() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/3/0");
  }

  searchProducts(prod: Product) {
    let produit = btoa(prod.name);
    this.router.navigateByUrl('/products/4/'+produit);
  }

  onLogout() {
    this.authService.logout();
  }

  viewCaddy() {
    if (this.caddyService.getCurrentCaddy().items.size<=0) {
      alert('Panier vide !');
    } else {
      this.router.navigateByUrl("/caddies");
    }
  }
}

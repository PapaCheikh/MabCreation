import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caddy } from '../model/caddy.model';
import { Client } from '../model/client.model';
import { ProductItem } from '../model/product-item.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  public host:string="http://localhost:8080";
  currentCaddyName: string = "Panier";
  public caddies = new Map();

  constructor(private http:HttpClient) {
    let caddies = localStorage.getItem('myCaddies');
    if (caddies) {
      this.caddies = JSON.parse(caddies);
    } else {
      let caddy = new Caddy(this.currentCaddyName);
      this.caddies.set(this.currentCaddyName, caddy); 
    }
  }

  public addProductToCaddy(product: Product) {
    let caddy = this.caddies.get(this.currentCaddyName);
    let productItem = caddy?.items.get(product.id);
    if (productItem===undefined) {
      productItem = new ProductItem();
      productItem.price = product.currentPrice;
      productItem.quantity = product.quantity;
      productItem.product = product;
      caddy.items.set(product.id, productItem);
    } else {
      productItem.quantity += product.quantity;
    }
  }

  getCurrentCaddy(): Caddy {
    return this.caddies.get(this.currentCaddyName);
  }
  
  public saveCaddies() {
    localStorage.setItem('myCaddies', JSON.stringify(this.caddies));
  }

  public addCommande(commande: Client) {
    return this.http.post(this.host + '/addCommande', commande);
  }

  public getTotal(): number {
    let caddy = this.caddies.get(this.currentCaddyName);
    console.log(caddy);
    
    let total = 0;
    for(let item of caddy.items.entries() ){
      
      total += item[1].price*item[1].quantity;
    }
    return total;
  }
}


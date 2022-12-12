import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  products:  any;
  currentProduct: any;
  added: number = 0;
  message: string = '';

  constructor(
    public catService: CatalogueService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts('/products');
    this.getProduit();
  }

  getProducts(url: string) {
    this.catService.getResource(this.catService.host+url).subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getProduit() {
    let ide = atob(this.route.snapshot.params['id']);
    this.catService.getProduct(ide).subscribe((data) => {
      this.currentProduct = data;
    },(err) => {
        console.log(err);
    });
  }

  updateProduit(currentProduct: Product) {
    this.catService.updateProduct(currentProduct.id, currentProduct).subscribe((data) => {
      this.added++;
      this.message = 'Le Produit "'+ currentProduct.name +'" a été mise à jour avec succès. ';
      this.getProducts(this.catService.host+'/products');
    },(err) => {
      console.log(err);
    }); 
  }

}

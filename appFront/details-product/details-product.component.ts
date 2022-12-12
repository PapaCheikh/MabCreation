import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { CaddyService } from '../services/caddy.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  currentProduct: any;

  constructor(private router:Router, private route:ActivatedRoute,
              public catalService:CatalogueService,
              public caddyService: CaddyService) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    let ide = atob(id);
    this.catalService.getResource(this.catalService.host+"/products/"+ide)
      .subscribe(data=>{
        this.currentProduct=data;
      },err=>{
        console.log(err);
      })
  }

  onAddProductToCaddy(p: Product) {
    this.caddyService.addProductToCaddy(p);
  }

}

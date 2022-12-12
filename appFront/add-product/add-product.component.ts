import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  added: number = 0;
  message: string = '';

  constructor(private catService: CatalogueService) { }

  ngOnInit(): void {
  }

  addProduit(value: any) {
    this.catService.addProduct(value).subscribe((data) => {
      this.added++;
      this.message = 'Le Produit "'+ value.name +'" a été ajouté avec succès. ';
      value=undefined;
    },(err) => {
      console.log(err);
    });
  }

}

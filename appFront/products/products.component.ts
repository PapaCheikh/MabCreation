import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { AuthService } from '../services/auth.service';
import { CaddyService } from '../services/caddy.service';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  currentRequest:string | undefined;
  editPhoto: boolean | undefined;
  currentProduct: any;
  selectedFiles: any | undefined;
  progress: number | undefined;
  currentFileUpload: any;
  deleted: number = 0;
  mess: string | undefined;

  private currentTime: number=0;

  constructor(public catService:CatalogueService,
    private route: ActivatedRoute,
    private  router:Router,
    public authService: AuthService,
    public caddyService: CaddyService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        let p1=this.route.snapshot.params['p1'];
        if(p1==1){
          this.currentRequest='/products';
          this.getProducts(this.currentRequest);
        }
        else if (p1==2){
          let idCat=this.route.snapshot.params['p2'];
          this.currentRequest='/categories/'+idCat+'/products';
          this.getProducts(this.currentRequest);
        }
        else if (p1==3){
          this.currentRequest='/products/search/promoProducts';
          this.getProducts(this.currentRequest);
        }
        else if (p1==4){
          let value = this.route.snapshot.params['p2'];
          let val = atob(value);
          this.currentRequest='/products/search/productsByKeyword?mc='+val;
          this.getProducts(this.currentRequest);
        }
        else if (p1==5){
          this.currentRequest='/products/search/dispoProducts';
          this.getProducts(this.currentRequest);
        }
       }
    });
    let p1=this.route.snapshot.params['p1'];
    if(p1==1){
      this.currentRequest='/products';
      this.getProducts(this.currentRequest);
    }
  }

  private getProducts(url: string) {
    this.catService.getResource(this.catService.host+url)
      .subscribe(data=>{
        this.products=data;
      },err=>{
        console.log(err);
      })
  }

  onEditPhoto(p: Product) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event: any) {
    this.selectedFiles=event.target.files;
  }

  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.catService.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.currentTime=Date.now();
      }
    },
      (err: any)=>{
      alert("Problème de chargement");
    })
    this.selectedFiles = undefined
  }

  getTS() {
    return this.currentTime;
  }
  
  onProductDetails(p: any) {
    let ide = btoa(p.id);
    this.router.navigateByUrl("/detailsProductComponent/"+ide);
  }

  deleteProduit(id: Product["id"]) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce produit ?");
    if (conf) {
      this.catService.deleteProduct(id).subscribe((data) => {
        this.getProducts('/products');
        this.deleted++;
        this.mess = 'Le produit a été supprimé avec succès.';
      },(err) => {
        console.log(err);
      });
    }
  }

  getProduit(currentProduct: any) {
    let prod = btoa(currentProduct.id);
    this.router.navigateByUrl('/updateProduct/'+ prod);
  }

  onAddProductToCaddy(p: Product) {
    this.caddyService.addProductToCaddy(p);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product.model';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getResource(url: string){
    return this.http.get(url);
  }

  uploadPhotoProduct(file: File, idProduct: string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

   public patchResource(url: string,data: any){
    return this.http.patch(url,data);
  }

  public deleteProduct(id: Product["id"]) {
    return this.http.delete(this.host + '/deleteProduct/' + id);
  }
  
  public addProduct(product: Product) {
    return this.http.post(this.host + '/addProduct', product);
  }

  public updateProduct(id: Product["id"], product: Product) {
    return this.http.put(this.host + '/updateProduct/' + id, product);
  }

  public getProduct(id: any) {
    return this.http.get(this.host + '/products/' + id);
  }

  public addChat(chat: any) {
    return this.http.post(this.host + '/addChat', chat);
  }
}

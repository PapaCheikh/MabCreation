import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CaddiesComponent } from './caddies/caddies.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProduitGuard } from './produit.guard';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addProduct', component: AddProductComponent, canActivate:[ProduitGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent, canActivate:[ProduitGuard]},
  {path: 'products/:p1/:p2', component: ProductsComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'caddies', component: CaddiesComponent},
  {path: 'client', component: ClientComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detailsProductComponent/:id', component: DetailsProductComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

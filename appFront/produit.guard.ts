import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard implements CanActivate {


  constructor (private authService: AuthService,
  private router : Router) {}

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean {
      if (this.authService.isloggedIn)
        return true;
      else {
        this.router.navigate(['app-forbidden']);
        return false;
      }
    }
  
}

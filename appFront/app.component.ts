import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CatalogueService } from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private catService: CatalogueService,
    private router: Router,
    public authService: AuthService) {}

  ngOnInit(): void {
    let isloggedin = localStorage.getItem('isloggedIn');
    let loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = 'http://localhost:8181/login';

  public loggedUser:string | undefined;
  public isloggedIn: Boolean = false;
  public roles: Role[] | undefined;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getUserFromDB(username:string):Observable<User> {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url);
  }

  signIn(user :User){
    this.loggedUser = user.username;
    //let password = user.password;
    this.isloggedIn = true;
    this.roles = user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    //localStorage.setItem('Password',password);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
  }

  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
      return false;
      this.roles.forEach((curRole) => {
        if(curRole.role == 'ADMIN') {
          admin = true;
        }
      });
    return admin;
  }

  getUserRoles(username :User["username"]){
    this.getUserFromDB(username).subscribe((user: User)=>{
    this.roles = user.roles;
    });
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
}

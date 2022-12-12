import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  error=0;
  chiffre: string | undefined;

  constructor(
    private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {}

   onLoggedin() {
    this.chiffre =this.user.password;
    let newLetter = '';
    let password = '';
    let shift = 4;
    for (let i = 0; i < this.chiffre.length; i++) {
      let letterCode = this.chiffre.charCodeAt(i);
      let newLetterCode = letterCode + shift;
      if (newLetterCode < 97) {
        newLetterCode = ((newLetterCode - 65 + shift) % 26) + 65;
        newLetter = String.fromCharCode(newLetterCode);
      } else if (newLetterCode > 122) {
        newLetterCode = ((newLetterCode - 97 + shift) % 26) + 97;
        newLetter = String.fromCharCode(newLetterCode);
      } else {
        newLetterCode = newLetterCode;
        newLetter = String.fromCharCode(newLetterCode);
      }
      password = password+newLetter;
    }
    let userPassword = "!m"+password+"Pr"+password+"£V!"+password+"@z"+password+"!B"+password+"l£/#";
    this.authService.getUserFromDB(this.user.username).subscribe((usr:User) => {
      if (usr.password==userPassword) {
        if (usr.enabled==true) {
          this.authService.signIn(usr);
          this.router.navigate(['/']);
        } else {
          this.error = 1;
        }
      } else
        this.erreur = 1;
    },(err) => console.log(err));
  }
}

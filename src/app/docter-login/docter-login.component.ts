import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-docter-login',
  templateUrl: './docter-login.component.html',
  styleUrls: ['./docter-login.component.css'],
})
export class DocterLoginComponent implements OnInit {
  username = 'user';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    public loginservice: AuthenticationService
  ) {}

  ngOnInit(): void {}

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);

      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      alert('Wrong Credentials');
      this.router.navigate(['home']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminAuthGuardService } from '../admin-auth-guard.service';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  username2 = 'user';
  password2 = '';
  invalidLogin = false;

  constructor(private router: Router, public loginservice: AdminAuthService) {}

  ngOnInit(): void {}

  checkLogin() {
    if (this.loginservice.authenticate(this.username2, this.password2)) {
      this.router.navigate(['admindash']);

      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
      alert('Wrong Credentials');
      this.router.navigate(['home']);
    }
  }
}

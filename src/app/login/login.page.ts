import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ionViewWillEnter() {
    this.email = '';
    this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(err => {
        alert(err.message || 'Login failed');
      });
  }
}

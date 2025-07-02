import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.authService.register(this.email, this.password)
      .then(() => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message || 'Registration failed');
      });
  }
}

import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  constructor(
    private menu: MenuController,
    private router: Router,
    private authService: AuthService
  ) {}

  openMenu() {
    this.menu.open('main-menu');
  }

  goToProfile() {
    this.menu.close('main-menu');
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout().then(() => {
      this.menu.close('main-menu');
      this.router.navigate(['/login']);
    });
  }
}
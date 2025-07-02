import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  bio: string = '';
  displayName: string = '';
  photoURL: string = '';
  loading = false;

  constructor(
    private profileService: ProfileService,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    await this.loadProfile();
  }

  async loadProfile() {
    this.loading = true;
    try {
      const profile: any = await this.profileService.getProfile();
      this.bio = profile?.bio || '';
      this.displayName = profile?.displayName || '';
      this.photoURL = profile?.photoURL || '';
    } catch (e) {
      this.bio = '';
      this.displayName = '';
      this.photoURL = '';
    }
    this.loading = false;
  }

  async saveProfile() {
    this.loading = true;
    try {
      await this.profileService.updateProfile({ bio: this.bio, displayName: this.displayName, photoURL: this.photoURL });
      const toast = await this.toastCtrl.create({ message: 'Profile saved!', duration: 2000, color: 'success', position: 'top' });
      toast.present();
      await this.loadProfile();
    } catch (e) {
      console.error('Profile save error:', e);
      const toast = await this.toastCtrl.create({ message: 'Error saving profile', duration: 2000, color: 'danger', position: 'top' });
      toast.present();
    }
    this.loading = false;
  }

  goBack() {
    this.navCtrl.back();
  }
}

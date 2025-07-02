import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

@NgModule({
   declarations: [ProfilePage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }])
  ],
  exports: [ProfilePage]
})
export class ProfilePageModule {}

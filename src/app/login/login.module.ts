import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }])
  ],
  exports: [LoginPage]
})
export class LoginPageModule {}

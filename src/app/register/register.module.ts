import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';

@NgModule({
    declarations: [RegisterPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegisterPage }])
  ],
  exports: [RegisterPage]
})
export class RegisterPageModule {}
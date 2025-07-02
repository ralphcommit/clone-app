import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WalletPage } from './wallet.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPage
  }
];

@NgModule({
    declarations: [WalletPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [WalletPage]
})
export class WalletPageModule {}

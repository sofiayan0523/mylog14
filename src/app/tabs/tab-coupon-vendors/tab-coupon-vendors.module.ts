import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCouponVendorsPageRoutingModule } from './tab-coupon-vendors-routing.module';

import { TabCouponVendorsPage } from './tab-coupon-vendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCouponVendorsPageRoutingModule
  ],
  declarations: [TabCouponVendorsPage]
})
export class TabCouponVendorsPageModule {}
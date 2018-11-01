import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VoucherComponent} from './voucher';
import {VoucherRoutingModule} from './voucher-routing.module';

@NgModule({
    imports: [
        CommonModule,
        VoucherRoutingModule
    ],
    declarations: [VoucherComponent]
})
export class VoucherModule {}

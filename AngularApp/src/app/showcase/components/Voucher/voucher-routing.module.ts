import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VoucherComponent} from './voucher';

@NgModule({
    imports: [
        RouterModule.forChild([
        {path: '', component: VoucherComponent}
    ])
    ],
    exports: [RouterModule]
})
export class VoucherRoutingModule {}

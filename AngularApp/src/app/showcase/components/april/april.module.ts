import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AprilComponent} from './april';
import {AprilRoutingModule} from './april-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AprilRoutingModule
     ],
    declarations: [	AprilComponent]
})
export class AprilModule {}

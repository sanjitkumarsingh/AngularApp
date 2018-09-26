import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DecemberComponent} from './december';
import {DecemberRoutingModule} from './december-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DecemberRoutingModule
    ],
     declarations: [DecemberComponent]
})
export class DecemberModule {}

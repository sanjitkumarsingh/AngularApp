import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OctoberComponent} from './october';
import {OctoberRoutingModule} from './october-routing.module';

@NgModule({
    imports: [
        CommonModule,
        OctoberRoutingModule,
        FormsModule
     ],
    declarations: [	OctoberComponent]
})
export class OctoberModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MarchComponent} from './march';
import {MarchRoutingModule} from './march-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MarchRoutingModule,
     ],
    declarations: [MarchComponent]
})
export class MarchModule {}

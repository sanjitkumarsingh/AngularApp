import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NovemberComponent} from './november';
import {NovemberRoutingModule} from './november-routing.module';
@NgModule({
     imports: [
        CommonModule,
        NovemberRoutingModule
     ],
    declarations: [NovemberComponent]
})
export class NovemberModule {}

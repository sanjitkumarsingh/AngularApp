import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JulyComponent} from './july';
import {JulyRoutingModule} from './july-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        JulyRoutingModule
    ],
    declarations: [JulyComponent]
})
export class JulyModule {}

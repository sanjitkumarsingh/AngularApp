import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JuneComponent} from './june';
import {JuneRoutingModule} from './june-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        JuneRoutingModule
    ],
    declarations: [JuneComponent]
})
export class JuneModule {}

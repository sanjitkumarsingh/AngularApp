import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AugustComponent} from './august';
import {FormsModule} from '@angular/forms';
import {AugustRoutingModule} from './august-routing.module';

@NgModule({
     imports: [
        CommonModule,
        FormsModule,
        AugustRoutingModule
    ],
    declarations: [AugustComponent]
})
export class AugustModule {}

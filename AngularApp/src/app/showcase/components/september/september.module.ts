import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SeptemberComponent} from './september';
import {SeptemberRoutingModule} from './september-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SeptemberRoutingModule
 ],
    declarations: [SeptemberComponent]
})
export class SeptemberModule {}

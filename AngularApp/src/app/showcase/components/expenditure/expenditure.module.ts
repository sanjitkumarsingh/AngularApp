import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenditureComponent} from './expenditure';
import {ExpenditureRoutingModule} from './expenditure-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ExpenditureRoutingModule
    ],
    declarations: [
        ExpenditureComponent
    ]
})
export class ExpenditureModule {}

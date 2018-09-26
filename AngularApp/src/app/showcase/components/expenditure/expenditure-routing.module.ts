import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ExpenditureComponent} from './expenditure';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: ExpenditureComponent}])],
    exports: [RouterModule]
})
export class ExpenditureRoutingModule {}

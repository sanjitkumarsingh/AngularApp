import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MayComponent} from './may';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: MayComponent}])],
    exports: [RouterModule]
})
export class MayRoutingModule {}

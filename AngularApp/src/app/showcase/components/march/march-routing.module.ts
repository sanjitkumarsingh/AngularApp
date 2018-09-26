import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MarchComponent} from './march';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: MarchComponent}])],
    exports: [RouterModule]
})
export class MarchRoutingModule {}

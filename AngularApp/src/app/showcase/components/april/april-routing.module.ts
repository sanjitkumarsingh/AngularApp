import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AprilComponent} from './april';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: AprilComponent}])],
    exports: [RouterModule]
})
export class AprilRoutingModule {}

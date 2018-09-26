import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OctoberComponent} from './october';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: OctoberComponent}])],
    exports: [RouterModule]
})
export class OctoberRoutingModule {}

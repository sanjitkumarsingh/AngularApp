import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SeptemberComponent} from './september';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: SeptemberComponent}])],
    exports: [RouterModule]
})
export class SeptemberRoutingModule {}

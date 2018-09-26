import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NovemberComponent} from './november';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: NovemberComponent}])],
    exports: [RouterModule]
})
export class NovemberRoutingModule {}

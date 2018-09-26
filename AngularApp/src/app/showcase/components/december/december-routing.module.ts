import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DecemberComponent} from './december';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: DecemberComponent}])],
    exports: [RouterModule]
})
export class DecemberRoutingModule {}

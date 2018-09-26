import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AugustComponent} from './august';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AugustComponent}])],
    exports: [RouterModule]
})
export class AugustRoutingModule {}

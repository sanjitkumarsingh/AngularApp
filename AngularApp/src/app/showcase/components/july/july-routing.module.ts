import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JulyComponent} from './july';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: JulyComponent}])],
    exports: [RouterModule]
})
export class JulyRoutingModule {}

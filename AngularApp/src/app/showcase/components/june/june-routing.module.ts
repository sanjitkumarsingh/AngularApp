import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JuneComponent} from './june';

@NgModule({
    imports: [RouterModule.forChild([{path: '', component: JuneComponent}])],
    exports: [RouterModule]
})
export class JuneRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FebuaryComponent} from './febuary';

@NgModule({
 imports: [
       RouterModule.forChild([ {path: '', component: FebuaryComponent}])],
       exports: [ RouterModule ]})
export class FebuaryRoutingModule {}

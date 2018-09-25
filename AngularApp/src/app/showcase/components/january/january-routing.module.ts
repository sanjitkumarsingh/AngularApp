import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JanuaryComponent } from './january';

@NgModule({
imports: [
 RouterModule.forChild([ { path: '', component: JanuaryComponent }])],
exports: [RouterModule]
})
export class CheckboxDemoRoutingModule { }

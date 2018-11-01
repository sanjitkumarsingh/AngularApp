import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionComponent } from './contribution';
import { ContributionRoutingModule } from './contribution-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ContributionRoutingModule
    ],
    declarations: [ContributionComponent]
})
export class ContributionModule { }

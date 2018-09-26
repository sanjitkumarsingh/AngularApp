import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FebuaryComponent} from './febuary';
import {FebuaryRoutingModule} from './febuary-routing.module';
import {ChipsModule} from '../../../components/chips/chips';
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

@NgModule({
 imports: [
        CommonModule,
        FormsModule,
        FebuaryRoutingModule,
        ChipsModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
    FebuaryComponent
   ]
})
export class FebuaryModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {JanuaryComponent} from './january';
import {CheckboxDemoRoutingModule} from './january-routing.module';
import {CheckboxModule} from '../../../components/checkbox/checkbox';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

@NgModule({
imports: [
        CommonModule,
        FormsModule,
        CheckboxDemoRoutingModule,
        CheckboxModule,
        TabViewModule,
        CodeHighlighterModule
       ],
    declarations: [	JanuaryComponent]
})
export class JanuaryModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MayComponent } from './may';
import { MayRoutingModule } from './may-routing.module';
import { ColorPickerModule } from '../../../components/colorpicker/colorpicker';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MayRoutingModule,
      ColorPickerModule,
      TabViewModule,
      CodeHighlighterModule
 ],
 declarations: [ MayComponent ]
})
export class MayModule { }

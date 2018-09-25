import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            // {path: 'january', loadChildren: './components/checkbox/checkboxdemo.module#CheckboxDemoModule'},
            {path: 'january', loadChildren: './components/january/january.module#JanuaryModule'},
            {path: 'febuary', loadChildren: './components/chips/chipsdemo.module#ChipsDemoModule'},
            {path: 'march', loadChildren: './components/tree/treedemo.module#TreeDemoModule'},
            {path: 'april', loadChildren: './components/toast/toastdemo.module#ToastDemoModule'},
            {path: 'may', loadChildren: './components/colorpicker/colorpickerdemo.module#ColorPickerDemoModule'},
            {path: 'june', loadChildren: './components/dropdown/dropdowndemo.module#DropdownDemoModule'},
            {path: 'july', loadChildren: './components/editor/editordemo.module#EditorDemoModule'},
            {path: 'august', loadChildren: './components/keyfilter/keyfilterdemo.module#KeyFilterDemoModule'},
            {path: 'september', loadChildren: './components/inputswitch/inputswitchdemo.module#InputSwitchDemoModule'},
            {path: 'october', loadChildren: './components/inputtext/inputtextdemo.module#InputTextDemoModule'},
            {path: 'november', loadChildren: './components/inputtextarea/inputtextareademo.module#InputTextareaDemoModule'},
            {path: 'december', loadChildren: './components/listbox/listboxdemo.module#ListboxDemoModule'},
            {path: 'collection', loadChildren: './components/button/buttondemo.module#ButtonDemoModule'},
            {path: 'expenditure', loadChildren: './components/splitbutton/splitbuttondemo.module#SplitButtonDemoModule'},
            {path: 'support', loadChildren: './components/support/support.module#SupportModule'},
            {path: 'employee', loadChildren: './components/setup/setup.module#SetupModule'},
            {path: 'empdue', loadChildren: './components/toolbar/toolbardemo.module#ToolbarDemoModule'}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

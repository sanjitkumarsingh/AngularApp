import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'january', loadChildren: './components/january/january.module#JanuaryModule'},
            {path: 'febuary', loadChildren: './components/febuary/febuary.module#FebuaryModule'},
            {path: 'march', loadChildren: './components/march/march.module#MarchModule'},
            {path: 'april', loadChildren: './components/april/april.module#AprilModule'},
            {path: 'may', loadChildren: './components/may/may.module#MayModule'},
            {path: 'june', loadChildren: './components/june/june.module#JuneModule'},
            {path: 'july', loadChildren: './components/july/july.module#JulyModule'},
            {path: 'august', loadChildren: './components/august/august.module#AugustModule'},
            {path: 'september', loadChildren: './components/september/september.module#SeptemberModule'},
            {path: 'october', loadChildren: './components/october/october.module#OctoberModule'},
            {path: 'november', loadChildren: './components/november/november.module#NovemberModule'},
            {path: 'december', loadChildren: './components/december/december.module#DecemberModule'},
            {path: 'collection', loadChildren: './components/contribution/contribution.module#ContributionModule'},
            {path: 'expenditure', loadChildren: './components/expenditure/expenditure.module#ExpenditureModule'},
            {path: 'support', loadChildren: './components/support/support.module#SupportModule'},
            {path: 'employee', loadChildren: './components/employee/employee.module#EmployeeModule'},
            {path: 'avdistribution', loadChildren: './components/Voucher/voucher.module#VoucherModule'}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

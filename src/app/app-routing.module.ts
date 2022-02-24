import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo:'/banner', pathMatch: 'full'},
    { path: 'banner', loadChildren: () => import('./banner-text/banner-text.module').then(x => x.BannerTextModule)},
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(x => x.CounterModule)},
    { path: 'counter2', loadChildren: () => import('./counter2/counter2.module').then(x => x.Counter2Module)},
    { path: 'products', loadChildren: () => import('./products/products.module').then(x => x.ProductModule)},
    { path: 'students', loadChildren: () => import('./students/students.module').then(x => x.StudentsModule)},
    { path: 'createDiv', loadChildren: () => import('./create-div/create-div.module').then(x => x.CreateDivModule)}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BannerTextComponent } from './banner-text.component';

const route: Routes = [{path:'', component:BannerTextComponent}];

@NgModule({
    declarations:[ BannerTextComponent ],
    imports: [RouterModule.forChild(route)]
})
export class BannerTextModule{}
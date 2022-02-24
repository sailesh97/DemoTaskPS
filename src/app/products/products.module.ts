import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderByPipe } from "src/app/products/order-by.pipe";
import { ProductsComponent } from "./products.component";

const routes: Routes = [{path: '', component: ProductsComponent}];

@NgModule({
    declarations: [
        ProductsComponent,
        OrderByPipe,
    ],
    imports: [ 
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class ProductModule{}
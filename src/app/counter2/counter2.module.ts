import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ControlCounter2Component } from "./control-counter2/control-counter2.component";
import { Counter2Component } from "./counter2.component";
import { ShowTimer2Component } from "./show-timer2/show-timer2.component";

const routes: Routes = [
    {path:'', component: Counter2Component},
]

@NgModule({
    declarations: [
        Counter2Component,
        ControlCounter2Component,
        ShowTimer2Component
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class Counter2Module { }
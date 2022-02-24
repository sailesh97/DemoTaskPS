import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ControlCounterComponent } from "./control-counter/control-counter.component";
import { CounterComponent } from "./counter.component";
import { ShowTimerComponent } from "./show-timer/show-timer.component";

    
const routes: Routes = [
    {path:'', component: CounterComponent}
]

@NgModule({
    declarations: [ 
        ShowTimerComponent,
        CounterComponent,
        ControlCounterComponent
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class CounterModule{}
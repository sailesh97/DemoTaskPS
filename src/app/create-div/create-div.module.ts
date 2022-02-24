import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateDivComponent } from "./create-div.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path:'', component: CreateDivComponent}
]

@NgModule({
    declarations: [
        CreateDivComponent
    ],
    imports: [CommonModule, ScrollingModule,RouterModule.forChild(routes)]
})
export class CreateDivModule{}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SortOnClickPipe } from "./sort-on-click.pipe";
import { StudentsComponent } from "./students.component";

const routes: Routes = [
    {path:'', component: StudentsComponent}
]

@NgModule({
    declarations: [
        StudentsComponent,
        SortOnClickPipe,
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class StudentsModule { }
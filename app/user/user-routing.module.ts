import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from "./user.component";

const routes: Routes = [
    { path: "", component: UserComponent }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    exports: [NativeScriptRouterModule]
})
export class UserRoutingModule { }

import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from "./user/user.module";
// import { localStorage } from './nativescript-localstorage/localstorage';
import "./nativescript-localstorage";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        UserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

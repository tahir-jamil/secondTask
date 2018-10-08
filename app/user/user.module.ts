import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";

@NgModule({
	imports: [
		NativeScriptUIDataFormModule,
		NativeScriptFormsModule,
		UserRoutingModule
	],
	declarations: [
		UserComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class UserModule { }

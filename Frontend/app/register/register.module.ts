import { routing } from './register.routing';
import { RegisterComponent } from './register.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        routing
        
    ],
    declarations: [
        RegisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterModule { }

import { GroupsComponent } from './groups.component';
import { routing } from './groups.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


@NgModule({
    imports: [
        NativeScriptCommonModule, 
        HttpClientModule,
        routing       
    ],
    declarations: [
        GroupsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GroupsModule { }

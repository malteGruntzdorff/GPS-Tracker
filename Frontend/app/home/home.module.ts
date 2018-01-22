import { routing } from './home.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeComponent } from "./home.component";
import { HttpModule } from '@angular/http';
import { NativeScriptHttpModule } from 'nativescript-angular/http';



@NgModule({
    imports: [
        NativeScriptCommonModule,
        HttpModule,
        routing,
        NativeScriptHttpModule,
      
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }

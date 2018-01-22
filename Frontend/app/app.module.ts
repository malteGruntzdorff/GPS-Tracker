

import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { appRoutes, routing } from "./app.routing";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GroupsModule } from './groups/groups.module';



@NgModule({
    bootstrap: [
        AppComponent
       
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        HttpClientModule,
        HttpModule,
        routing,
        HomeModule,
        RegisterModule,
        GroupsModule
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }


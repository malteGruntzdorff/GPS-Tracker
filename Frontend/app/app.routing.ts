import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { GroupsComponent } from './groups/groups.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';



export const appRoutes: any = [
    { path: "", redirectTo:'home', pathMatch: 'full' },
    { path: "home", loadChildren: 'app/home/home.module#HomeModule'},
    { path: "register",  loadChildren: 'app/register/register.module#RegisterModule'},
    { path: "groups", loadChildren: 'app/groups/groups.module#GroupsModule'}
    
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true});
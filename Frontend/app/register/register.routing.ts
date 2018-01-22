import { Routes, RouterModule }  from '@angular/router';

import { RegisterComponent } from './register.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const routing = RouterModule.forChild(routes);
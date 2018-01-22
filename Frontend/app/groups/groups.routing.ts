import { Routes, RouterModule }  from '@angular/router';

import { GroupsComponent } from './groups.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'groups',
    component: GroupsComponent
  }
];

export const routing = RouterModule.forChild(routes);
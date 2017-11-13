import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { AuthGuard } from './_guard/auth.guard';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

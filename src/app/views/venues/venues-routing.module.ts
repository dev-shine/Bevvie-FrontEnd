import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenuesComponent } from "./venues.component";

const routes: Routes = [
  {
    path: '',
    component: VenuesComponent,
    data: {
      title: 'Venues'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule {}

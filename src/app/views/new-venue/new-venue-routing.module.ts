import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewVenueComponent} from "./new-venue.component";

const routes: Routes = [
  {
    path: '',
    component: NewVenueComponent,
    data: {
      title: 'Venue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewVenueRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VenueDetailComponent} from "./venue-detail.component";

const routes: Routes = [
  {
    path: '',
    component: VenueDetailComponent,
    data: {
      title: 'Venue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDetailRoutingModule {}

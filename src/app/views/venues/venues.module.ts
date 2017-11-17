import { NgModule } from '@angular/core';

import { VenuesComponent } from './venues.component';
import { VenuesRoutingModule } from './venues-routing.module';
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [
    VenuesRoutingModule,
    CommonModule
  ],
  declarations: [ VenuesComponent ]
})
export class VenuesModule { }

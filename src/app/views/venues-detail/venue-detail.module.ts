import { NgModule } from '@angular/core';

import { VenueDetailComponent } from './venue-detail.component';
import { VenueDetailRoutingModule } from './venue-detail-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from "@angular/common";
import { TimepickerModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    VenueDetailRoutingModule,
    CommonModule,
    TabsModule,
    TimepickerModule,
    FormsModule
  ],
  declarations: [ VenueDetailComponent ]
})
export class VenueDetailModule { }

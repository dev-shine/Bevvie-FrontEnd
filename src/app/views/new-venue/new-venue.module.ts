import { NgModule } from '@angular/core';

import { NewVenueComponent } from './new-venue.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from "@angular/common";
import { TimepickerModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { NewVenueRoutingModule } from "./new-venue-routing.module";

@NgModule({
  imports: [
    NewVenueRoutingModule,
    CommonModule,
    TabsModule,
    TimepickerModule,
    FormsModule
  ],
  declarations: [ NewVenueComponent ]
})
export class NewVenueModule { }

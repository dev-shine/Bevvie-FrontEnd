import { NgModule } from '@angular/core';

import { VenuesComponent } from './venues.component';
import { VenuesRoutingModule } from './venues-routing.module';

@NgModule({
  imports: [
    VenuesRoutingModule
  ],
  declarations: [ VenuesComponent ]
})
export class VenuesModule { }

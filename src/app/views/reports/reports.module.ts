import { NgModule } from '@angular/core';

import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ReportsRoutingModule,
    CommonModule
  ],
  declarations: [ ReportsComponent ]
})
export class ReportsModule { }

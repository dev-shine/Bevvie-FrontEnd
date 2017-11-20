import { NgModule } from '@angular/core';

import { ReportDetailComponent } from './report-detail.component';
import { ReportDetailRoutingModule } from './report-detail-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from "@angular/common";
import { TimepickerModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    ReportDetailRoutingModule,
    CommonModule,
    TabsModule,
    TimepickerModule,
    FormsModule
  ],
  declarations: [ ReportDetailComponent ]
})
export class ReportDetailModule { }

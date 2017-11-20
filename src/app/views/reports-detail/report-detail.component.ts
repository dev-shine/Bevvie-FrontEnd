import { Component, ViewChild, OnInit, TemplateRef, Input, ElementRef} from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";

import {Report} from '../../_models/_report';
import { ReportService } from '../../_services/reports.service';

@Component({
  templateUrl: 'report-detail.component.html'
})


export class ReportDetailComponent implements OnInit{

  @ViewChild('header') header: ElementRef;

  report: Report;

  constructor(private reportService: ReportService,
              private activatedRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let reportId = params['reportId'];
      this.reportService.getReportById(reportId)
        .subscribe(response => {
            console.log(response);
            this.report = response;
          },
          err=>{
            if(err.status === 401) {
              this.reportService.logOut();
              window.location.reload();
            }
          });
    });
  }
}

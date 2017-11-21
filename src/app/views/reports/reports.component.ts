import { Component, OnInit } from '@angular/core';

import { ReportService } from '../../_services/reports.service';
import { Report} from "../../_models/_report";

import * as qs from 'qs';

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit{

  reports: Report[] = [];

  pageOffset: number = 0;
  totalEntries: number = 0;
  paginator : number[] = [];

  params : any = {};

  constructor(private reportService: ReportService) { }


  ngOnInit(){
    // get users from secure api end point
    this.reportService.getReports()
      .subscribe(response => {
          this.reports = response.docs as Report[];
          this.bindPage(response);
        },
        err=>{
          if(err.status === 401) {
            this.reportService.logOut();
            window.location.reload();
          }
        });
  }


  private getPage(page:number){
    this.params.page = page;
    this.params.statistics = true;
    var codifiedparams = qs.stringify(this.params);
    this.reportService.getReportsWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {

          this.reports = response.docs as Report[];
          this.bindPage(response);
        },
        err=>{
          if(err.status === 401) {
            this.reportService.logOut();
            window.location.reload();
          }
        });
  }

  private bindPage(response: any){
    this.pageOffset = response.offset;
    this.totalEntries = response.total;
    this.generatePaginator();
  }

  private generatePaginator(){
    this.paginator = [];
    let maxValue = this.totalEntries/10;
    let minValue = 1;
    for(var i=minValue; i<=maxValue; i++){
      this.paginator.push(i);
    }
  }

  private decodeToAscii(codifiedparams: string):string{
    while(codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
      codifiedparams = codifiedparams.replace('%5B', '[');
      codifiedparams = codifiedparams.replace('%5D', ']');
    }

    return codifiedparams
  }
}

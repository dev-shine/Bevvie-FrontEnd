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
    this.params.offset = (page-1)*10;
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
    this.paginator = []; //20
    let maxValue = (this.totalEntries/10)+2 > this.pageOffset/10 ? (this.pageOffset/10)+2 : this.totalEntries/10;
    let minValue = (this.pageOffset/10)-2 > 0 ? (this.pageOffset/10)+2 : 1;

    for(var i=1; i<=maxValue; i++){
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

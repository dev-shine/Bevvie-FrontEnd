import { Component, OnInit } from '@angular/core';

import { ReportService } from '../../_services/reports.service';
import { Report} from "../../_models/_report";

import * as qs from 'qs';

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit{

  reports: Report[] = [];
  currentPage: number = 0;
  pageOffset: number = 0;
  numberPages: number = 0;
  totalUsers: number = 0;
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
    this.currentPage = response.page;
    this.pageOffset = response.offset;
    this.totalUsers = response.total;
    this.numberPages = response.pages;

    this.generatePaginator();
  }

  private generatePaginator(){
    this.paginator = [];
    let maxValue = this.currentPage+2 < this.numberPages ? this.currentPage+2 : this.numberPages;
    let minValue = this.currentPage-2 > 0 ? this.currentPage-2 : 1;
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

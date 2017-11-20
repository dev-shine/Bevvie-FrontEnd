import { Component, OnInit } from '@angular/core';

import { Venue } from '../../_models/_venue';
import { VenueService } from '../../_services/venue.service';

import * as qs from 'qs';

@Component({
  templateUrl: 'venues.component.html'
})
export class VenuesComponent implements OnInit{

  venues: Venue[] = [];
  currentPage: number = 0;
  pageOffset: number = 0;
  numberPages: number = 0;
  totalUsers: number = 0;
  paginator : number[] = [];

  params : any = {};

  nameSort : string;

  constructor(private venueService: VenueService) { }

  ngOnInit(){
    // get users from secure api end point
    this.venueService.getVenues()
      .subscribe(response => {

        this.venues = response.docs as Venue[];
        this.bindPage(response)
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

  private checkOrder(filter): string{
    switch(filter){
      case 'name':
        this.nameSort = this.nameSort == 'desc' ? 'asc' : 'desc';
        return this.nameSort;

      default:
        return 'asc';
    }
  }

  private filterVenuesByName(newFilter:string ){
    this.params.name = newFilter;
    this.params.page = 1;

    this.venueService.getVenuesWithParams(this.params)
      .subscribe(response => {

        this.venues = response.docs as Venue[];
        this.bindPage(response);
      });
  }

  private getPage(page:number){
    this.params.page = page;
    var codifiedparams = qs.stringify(this.params);

    this.venueService.getVenuesWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {

        this.venues = response.docs as Venue[];
        this.bindPage(response);
      });
  }

  private getPageWithSort(filter: string){
    this.params.sort = {
      'field': filter,
      'order': this.checkOrder(filter)
    };
    var codifiedparams = qs.stringify(this.params);

    this.venueService.getVenuesWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {

        this.venues = response.docs as Venue[];
        this.bindPage(response);
      });
  }


  private decodeToAscii(codifiedparams: string):string{
    while(codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
      codifiedparams = codifiedparams.replace('%5B', '[');
      codifiedparams = codifiedparams.replace('%5D', ']');
    }

    return codifiedparams
  }

}

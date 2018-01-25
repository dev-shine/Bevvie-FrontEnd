import {Component, ViewChild, OnInit, TemplateRef, Input, ElementRef} from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap";

import {Venue, venueLocation, venueSchedule} from '../../_models/_venue';
import { VenueService } from '../../_services/venue.service';

import * as qs from 'qs';

@Component({
  templateUrl: 'new-venue.component.html'
})


export class NewVenueComponent implements OnInit{

  @ViewChild('header') header: ElementRef;

  params = {
    name : '',
    image: '',
    radius: '',
    location: {
      type: 'Point',
      coordinates:[]
    },
    schedule:[]
  };
  error = '';
  success = '';


  myTime : Date;
  schedule : venueSchedule[] = [];
  customImage: any;

  modalForAbout:boolean = false;

  public primaryModal: BsModalRef;

  constructor(private venueService: VenueService,
              private activatedRoute: ActivatedRoute,
              private modalService: BsModalService,
              public router: Router) {
    this.myTime = new Date();
  }

  ngOnInit(){
    this.header.nativeElement.innerHTML = 'New Venue';
    this.createFakeSchedule();
  }

  stringifyDays(day:number){
    switch(day){
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      case 7:
        return 'Sun';
    }
  }
  private createFakeSchedule(){
    while(this.schedule.length < 7) {
      let day = {
        weekday: this.schedule.length+1, //0+1= 1, 1+1 = 2…
        openTime: new Date(),
        closeTime: new Date(),
        isClose: false
      };
      this.schedule.push(day);
    }
  }

  fileChangeEvent(fileInput: any){
    this.restartAlerts();

    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.customImage = e.target.result;

    }
    reader.readAsDataURL(fileInput.target.files[0]);
    this.venueService.postNewImage(fileInput.target.files[0])
      .subscribe(response => {
          console.log(response);
          this.params.image = response._id;
          this.success = 'Venue image updated correctly';
        },
        err=>{
          if(err.status === 401) {
            this.venueService.logOut();
            window.location.reload();
          }
          let error = JSON.parse(err._body);
          this.error = error.localizedError;
        });
  }

  saveFormData(){
    var schedule = [];
    this.schedule.map(item => {
      if(!item.isClose){
        schedule.push(item);
      }
    });
    this.params.schedule = schedule;


    this.venueService.postNewVenue(this.params)
      .subscribe(response => {
          this.router.navigate(['venues'])
        },
        err=>{
          if(err.status === 401) {
            this.venueService.logOut();
            window.location.reload();
          }
          let error = JSON.parse(err._body);
          this.error = error.localizedError;
        });
  }

  private restartAlerts(){
    this.error = '';
    this.success = '';
  }
}


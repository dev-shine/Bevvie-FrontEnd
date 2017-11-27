import {Component, ViewChild, OnInit, TemplateRef, Input, ElementRef} from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap";

import {Venue, venueLocation, venueSchedule} from '../../_models/_venue';
import { VenueService } from '../../_services/venue.service';

@Component({
  templateUrl: 'venue-detail.component.html'
})


export class VenueDetailComponent implements OnInit{

  @ViewChild('header') header: ElementRef;

  venue:Venue;
  validateAction: boolean;
  myTime : Date;
  schedule : venueSchedule[] = [];
  customImage: any;
  error = '';
  success = '';
  remove:boolean = false;

  modalForAbout:boolean = false;

  public primaryModal: BsModalRef;

  constructor(private venueService: VenueService,
              private activatedRoute: ActivatedRoute,
              private modalService: BsModalService,
              public router: Router) {
    this.myTime = new Date();
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let venueId = params['venueId'];
      this.venueService.getVenueById(venueId)
        .subscribe(response => {
          console.log(response);
          this.venue = response;
          this.header.nativeElement.innerHTML = this.venue.name;

          this.refillSchedule();
        },
          err=>{
            if(err.status === 401) {
              this.venueService.logOut();
              window.location.reload();
            }
          });
    });
  }

  private stringifyDays(day:number){
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
  private refillSchedule(){
    this.schedule = this.venue.schedule;
    let days = this.schedule.map(item => {return item.weekday});
    while(this.schedule.length < 7){
      for(var i = 1; i<= 7;i++){
        if(days.indexOf(i) == -1) {
          let closeDay : venueSchedule = {
            weekday:i,
            openTime: new Date(),
            closeTime: new Date(),
            isClose:true
          };
          this.schedule.push(closeDay);
        }
        this.schedule.sort(function(a, b) {
          return a.weekday - b.weekday;
        })
      }
    }
    for(let day of this.schedule){
      if(day.isClose == null){
        this.schedule[i]['isClose'] = false;
      }
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
          this.venue.image = response;
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
    this.restartAlerts();

    var schedule = [];
    this.schedule.map(item => {
      if(!item.isClose){
        schedule.push(item);
      }
    });
    let params = {
      name: this.venue.name,
      image: this.venue.image._id,
      radius: this.venue.radius,
      location: this.venue.location,
      schedule: schedule
    };
    this.venueService.postVenueUpdate(this.venue._id, params)
      .subscribe(response => {
          this.success = 'Venue data has been updated correctly';
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

  deleteVenue() {
    if(this.remove) {
      this.venueService.deleteVenue(this.venue._id)
        .subscribe(response => {
          this.router.navigate(['venues']);
        });
    }else{
      this.remove = true;
    }
  }

  private restartAlerts(){
    this.error = '';
    this.success = '';
  }
}

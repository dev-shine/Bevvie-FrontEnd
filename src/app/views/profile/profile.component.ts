import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from "ngx-bootstrap";
import { Location} from "@angular/common";
import {User, userAbout, userImage} from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  templateUrl: 'Profile.component.html'
})

export class ProfileComponent implements OnInit{

  user: User;
  validateAction: boolean;
  currentElement: userImage;

  validationElements = {
    id: null,
    validated_images: [],
    rejected_images: [],
  };
  error = '';
  success='';

  modalForAbout:boolean = false;

  public primaryModal: BsModalRef;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private modalService: BsModalService,
              private location: Location) {
  }
  openModal(template: TemplateRef<any>, action: boolean, image: userImage) {
    this.validateAction = action;
    this.primaryModal = this.modalService.show(template);
    this.currentElement = image;
  }
  openAboutModal(template: TemplateRef<any>, action: boolean) {
    this.validateAction = action;
    this.primaryModal = this.modalService.show(template);
    this.modalForAbout = true;
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['userId'];
      this.userService.getUserById(userId)
        .subscribe(response => {
          console.log(response);
          this.user = response;
          this.validationElements.id = this.user._id;
        },
          err=>{
            if(err.status === 401) {
              this.userService.logOut();
              window.location.reload();
            }
          });
    });
  }

  getAge(dateString) {
    if(dateString != null) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    return '';
  }

  cancelModalAction(){
    this.primaryModal.hide();
  }

  confirmModalAction(action: boolean, isAbout:boolean){
    this.primaryModal.hide();
    if(!isAbout) {
      switch (action) {
        case true:
          this.validationElements.validated_images.push(this.currentElement._id);
          this.user.images.map(item => {
            if (item == this.currentElement) {
              item.validated = true;
            }
          });
          break;

        case false:
          this.validationElements.rejected_images.push(this.currentElement._id);
          let index = this.user.images.indexOf(this.currentElement)
          this.user.images = this.user.images.filter(item => item !== this.currentElement);
          break;
      }
      this.currentElement = null;

    }else{
      this.validationElements['about_validated'] = action;
      this.user.about_validated = action;
      if(!action) {
        // this.user.about = '';
        this.validationElements['about'] = '';
      }
      this.modalForAbout = false;
    }
  }
  saveFormData(){
    this.restartAlerts();
    this.userService.postUsersValidate(this.user._id, this.validationElements)
      .subscribe(response => {
        this.user = response;
        this.success = 'User data has been updated correctly';
        },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
          let error = JSON.parse(err._body);
          this.error = error.localizedError;
        });
  }
  changeBanState(){
    if(this.user.banned){
      this.unBanUser();
    }else{
      this.banUser();
    }
  }
  banUser(){
    this.restartAlerts();
    this.userService.postUsersBan(this.user._id)
      .subscribe(response => {
        this.user = response;
        this.success = 'User has been banned correctly';
      },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
          let error = JSON.parse(err._body);
          this.error = error.localizedError;
        });
  }
  unBanUser(){
    this.restartAlerts();
    this.userService.postUsersUpdate(this.user._id, {banned:false})
      .subscribe(response => {
        this.user = response;
          this.success = 'User has been Unbanned correctly';
        },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
          let error = JSON.parse(err._body);
          this.error = error.localizedError;
        });
  }
  restartAlerts(){
    this.error = '';
    this.success = '';
  }

}

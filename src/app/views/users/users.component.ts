import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

import * as qs from 'qs';

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{

  users: User[] = [];
  currentPage: number = 0;
  pageOffset: number = 0;
  numberPages: number = 0;
  totalEntries: number = 0;
  paginator : number[] = [];

  params : any = {};

  nameSort : string;
  validateSort: string;
  bannedSort: string;

  constructor(private userService: UserService) { }

  ngOnInit(){
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(response => {

        this.users = response.docs as User[];
        this.bindPage(response);
      },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
        });
  }

  private getPage(page:number){
    this.params.page = page;
    var codifiedparams = qs.stringify(this.params);

    this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {

        this.users = response.docs as User[];
        this.bindPage(response);
      },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
        });
  }
  getPageWithSort(filter: string){
    this.params.sort = {
      'field': filter,
      'order': this.checkOrder(filter)
    };
    var codifiedparams = qs.stringify(this.params);

    this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {

        this.users = response.docs as User[];
        this.bindPage(response);
      },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
        });
  }

  filterUsersByName(newFilter:string ){
    this.params.name = newFilter;
    this.params.page = 1;

    this.userService.getUsersWithParams(this.params)
      .subscribe(response => {

        this.users = response.docs as User[];
        this.bindPage(response);
      },
        err=>{
          if(err.status === 401) {
            this.userService.logOut();
            window.location.reload();
          }
        });
  }
  checkOrder(filter): string{
    switch(filter){
      case 'name':
        this.nameSort = this.nameSort == 'desc' ? 'asc' : 'desc';
        return this.nameSort;

      case 'validated':
        this.validateSort = this.validateSort == 'desc' ? 'asc' : 'desc';
        return this.validateSort;

      case 'banned':
        this.bannedSort = this.bannedSort == 'desc' ? 'asc' : 'desc';
        return this.bannedSort;

      default:
        return 'asc';
    }
  }
  bindPage(response: any){
    this.currentPage = response.page;
    this.pageOffset = response.offset;
    this.totalEntries = response.total;
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

  userIsValidated(user:User): Boolean{
    if(user.images.length > 0){
      for( var i = 0; i<=user.images.length-1; i++){
        if(user.images[i].validated == null){
          return false;
        }
      }
    }
    if(user.about_validated == null) {
      if(user.about != null) {
        return false;
      }
    }

    return true;
  }

  private decodeToAscii(codifiedparams: string):string{
    while(codifiedparams.split('%5B').length > 1 && codifiedparams.split('%5D').length > 1) {
      codifiedparams = codifiedparams.replace('%5B', '[');
      codifiedparams = codifiedparams.replace('%5D', ']');
    }

    return codifiedparams
  }
  showUser(user: User){
    //console.log(user)
  }
}

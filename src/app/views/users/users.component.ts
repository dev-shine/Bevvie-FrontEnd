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
  totalUsers: number = 0;
  paginator : number[] = [];

  params : any = {};

  nameSort : string;
  validateSort: string;
  bannedSort: string;
  filteredString:string = '';

  constructor(private userService: UserService) { }

  ngOnInit(){
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(response => {
        console.log(response.docs);

        this.users = response.docs as User[];
        this.bindPage(response);
      });
  }

  private getPage(page:number){
    this.params.page = page;
    var codifiedparams = qs.stringify(this.params);

    this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {
        console.log(response.docs);

        this.users = response.docs as User[];
        this.bindPage(response);
      });
  }
  private getPageWithSort(filter: string){
    this.params.sort = {
      'field': filter,
      'order': this.checkOrder(filter)
    };
    var codifiedparams = qs.stringify(this.params);

    this.userService.getUsersWithParams(this.decodeToAscii(codifiedparams))
      .subscribe(response => {
        console.log(response.docs);

        this.users = response.docs as User[];
        this.bindPage(response);
      });
  }

  private filterUsersByName(newFilter:string ){
    this.params.name = newFilter;
    console.log(newFilter);
    this.userService.getUsersWithParams(this.params)
      .subscribe(response => {
        console.log(response.docs);

        this.users = response.docs as User[];
        this.bindPage(response);
      });

  }
  private checkOrder(filter): string{
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
  private bindPage(response: any){
    this.currentPage = response.page;
    this.pageOffset = response.offset;
    this.totalUsers = response.total;
    this.numberPages = response.pages;

    this.generatePaginator();
  }

  private generatePaginator(){
    this.paginator = [];
    let maxValue = this.currentPage+3 < this.numberPages ? this.currentPage+4 : this.numberPages;
    let minValue = this.currentPage-3 > 0 ? this.currentPage-3 : 1;
    for(var i=minValue; i<=maxValue; i++){
      this.paginator.push(i);
    }
  }
  private userIsValidated(user:User): Boolean{
    if(user.images.length > 0){
      for( var i = 0; i<=user.images.length-1; i++){
        if(user.images[i].validated == null){
          return false;
        }else{
          if(!user.images[i].validated){
            return false;
          }
        }
      }
    }
    if(user.about != null) {
      if (!user.about_validated) {
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
  private showUser(user: User){
    //console.log(user)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';


@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements  OnInit{

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['venues']);
  }

}

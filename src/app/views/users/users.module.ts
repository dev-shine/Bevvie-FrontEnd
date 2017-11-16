import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule
  ],
  declarations: [ UsersComponent ]
})
export class UsersModule { }

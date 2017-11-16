import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }

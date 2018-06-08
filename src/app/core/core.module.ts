import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService,DataService]
})
export class CoreModule { }

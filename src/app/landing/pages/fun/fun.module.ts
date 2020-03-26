import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FunRoutingModule } from './fun-routing.module';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FunRoutingModule,
    InfiniteScrollModule
  ]
})
export class FunModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FunRoutingModule } from './fun-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FunRoutingModule
  ]
})
export class FunModule { }

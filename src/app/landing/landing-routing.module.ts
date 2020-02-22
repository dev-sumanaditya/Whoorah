import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'fun', loadChildren: './pages/fun/fun.module#FunModule'},
    {path: 'videos', loadChildren: './pages/video/video.module#VideoModule'},
    {path: '', loadChildren: './pages/home/home.module#HomeModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

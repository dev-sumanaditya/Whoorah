import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'fun', loadChildren: './pages/fun/fun.module#FunModule'},
    {path: 'videos', loadChildren: './pages/video/video.module#VideoModule'},
    {path: '404', loadChildren: './pages/not-found/not-found.module#NotFoundModule'},
    {path: '', pathMatch: 'full', loadChildren: './pages/home/home.module#HomeModule'},
    {path: '**', redirectTo: '/404'},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

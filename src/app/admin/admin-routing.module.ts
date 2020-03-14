import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { VidsComponent } from './pages/vids/vids.component';
import { PicsComponent } from './pages/pics/pics.component';
import { MembersComponent } from './pages/members/members.component';
import { DashComponent } from './pages/dash/dash.component';
import { LoginComponent } from './login/login.component';
import { SuperAdminComponent } from './pages/super-admin/super-admin.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: PanelComponent, children: [
    {path: 'video', component: VidsComponent},
    {path: 'gif', component: PicsComponent},
    {path: 'members', component: MembersComponent},
    {path: 'super', component: SuperAdminComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', component: DashComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

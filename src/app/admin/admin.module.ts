import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './pages/dash/dash.component';
import { MembersComponent } from './pages/members/members.component';
import { VidsComponent } from './pages/vids/vids.component';
import { PicsComponent } from './pages/pics/pics.component';
import { AgGridModule } from 'ag-grid-angular';
import { SuperAdminComponent } from './pages/super-admin/super-admin.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [PanelComponent, LoginComponent, DashComponent, MembersComponent, VidsComponent, PicsComponent, SuperAdminComponent, SettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class AdminModule { }

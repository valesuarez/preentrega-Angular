import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        DashboardRoutingModule,
        UsersModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
       
     
    ]
})
export class DashboardModule { }

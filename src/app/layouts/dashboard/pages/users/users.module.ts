import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsersDialogComponent } from './componentes/users-dialog/users-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }

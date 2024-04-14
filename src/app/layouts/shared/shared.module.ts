import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ValidacionePipe } from './pipes/validacione.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NombreYApellidoPipe } from './pipes/nombreyapellido.pipe';
import { TamanoDirective } from './directivas/tamano.directive';
@NgModule({
  declarations: [
    ValidacionePipe,
    NombreYApellidoPipe,
    TamanoDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DragDropModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,  
    MatSelectModule,
    MatIconModule,
    ValidacionePipe,
    NombreYApellidoPipe,
    TamanoDirective
    
    ],
})
export class SharedModule { }

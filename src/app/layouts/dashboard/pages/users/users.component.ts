import { Component } from '@angular/core';
import { Ialumnos } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './componentes/users-dialog/users-dialog.component';
import { Materias } from './models/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['nombre y Apellido', 'dni', 'email', 'materia','nota', 'estado', 'opciones'];
  alumnos:Ialumnos[]=[
  
    
  ];
  
  constructor(private matDialog: MatDialog){}

  openDialog(editarAlumno?:Ialumnos):void{
        this.matDialog
        .open(UsersDialogComponent,{
          data:editarAlumno,
        })
        .afterClosed()
        .subscribe({
      next: (result)=>{
        if(result){
          if(editarAlumno){
            this.alumnos =this.alumnos.map((a)=>a.dni===editarAlumno.dni? {...a, ...result} : a)

          }else{
          this.alumnos=[...this.alumnos,result ]}
        }
        
      },
    })
  }

  eliminarAlumno(dni:number): void{
    if(confirm('esta seguro'))
    this.alumnos =this.alumnos.filter((a) =>a.dni !=dni);
  }

}

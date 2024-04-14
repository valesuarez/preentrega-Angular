import { Component, Inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ialumnos } from '../../models';
import { soloGmailValidator } from '../../utils/validatos';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrl: './users-dialog.component.scss'
})
export class UsersDialogComponent {
  userForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
     private matDialogRef: MatDialogRef<UsersDialogComponent>,
     @Inject(MAT_DIALOG_DATA) private editarAlumno?:Ialumnos)
     {
    this.userForm =this.formBuilder.group({
      nombre:['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      apellido:['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$') ]],
      dni:['',[Validators.required, Validators.pattern(/^([0-9])*$/),Validators.maxLength(8),Validators.minLength(8)
    ]],
      email:['',[Validators.required,soloGmailValidator ,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
      materia:['',[Validators.required ]],
      nota:['',[Validators.required, Validators.pattern(/^([0-9])*$/),Validators.max(10),Validators.min(1)
    ]],
      estado:['',[Validators.required ]],
      
    })
if(editarAlumno){
this.userForm.patchValue(editarAlumno)
  }}

    
  get nombreControl() {
    return this.userForm.get('nombre');
  }
  get apellidoControl() {
    return this.userForm.get('apellido');
  }
  get dniContro(){
    return this.userForm.get('dni')
  }
   get emailControl(){
    return this.userForm.get('email');
  }
  get materiControl(){
    return this.userForm.get('materia');
  }
  get notaControl(){
    return this.userForm.get('nota');
  }
  get estadoControl(){
    return this.userForm.get('estado')
  }


    




    agregar(): void{
      if (this.userForm.invalid) {
        this.userForm.markAllAsTouched();
      } else {
        Swal.fire({
          icon:'success',
          title:'Realizado',
          text:'ALUMNO AGREGADO CORRECTAMENTE',})
        this.matDialogRef.close(this.userForm.value);
      

      }

    }

    
  }




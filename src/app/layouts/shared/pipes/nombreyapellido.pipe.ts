import { Pipe, PipeTransform } from '@angular/core';
import { Ialumnos } from '../../dashboard/pages/users/models';

@Pipe({
  name: 'nombreYApellido'
})
export class NombreYApellidoPipe implements PipeTransform {

  
    transform(value:Ialumnos, ...args:unknown[]): unknown {
      let result = `${value.nombre} ${value.apellido}`;
      console.log(value);
      return result;
    }
  

}

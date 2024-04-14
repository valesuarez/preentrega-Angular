
export type Materias = 'Desarrollo wed' | 'JavaScript' | 'Angular' | 'React';

export type Estado = 'Aprobado' | 'Recupera' |'Recursa';

export interface Ialumnos{
    nombre:string;
    apellido:string;
    dni:number;
    email:string;
    materia:Materias;
    nota:number;
    estado:Estado;
    
}
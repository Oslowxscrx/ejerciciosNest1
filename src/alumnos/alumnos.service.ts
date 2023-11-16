import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnosService {
  alumnos :Alumno[] = [
    {id: 1, name: 'Oscar'}, 
    {id: 2, name: 'Sebas'}, 
  ]
  // create(createAlumnoDto: CreateAlumnoDto) {
  //   return 'This action adds a new alumno';
  // }

  findAll() {
    return this.alumnos
  }

  findOne(id) {
    const res = this.alumnos.find( objeto => objeto.id === parseInt(id));
    if(!res) throw new NotAcceptableException ('no existe');
    return res
  }

  // update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
  //   return `This action updates a #${id} alumno`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} alumno`;
  // }
}

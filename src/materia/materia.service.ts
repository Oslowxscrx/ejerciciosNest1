import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MateriaAlumno } from './interfaz/materia1';
import { NotFoundError } from 'rxjs';

@Injectable()
export class MateriaService {

  materias: MateriaAlumno[] = [
    {id: 1 , name: 'Mate'},
    {id: 2 , name: 'Fisica'},
    {id: 3 , name: 'Algebra'},
    {id: 4 , name: 'Anatomia'},
  ]

  // create(createMateriaDto: CreateMateriaDto) {
  //   return createMateriaDto
  // }

  findAll() {
    return this.materias
  }

  findOne(id) {
    const res = this.materias.find(objeto => objeto.id === parseInt(id));
    if(!res) throw new NotFoundException ('no existe guarra')
    return res

  }
  findByLetterA(letter: string): MateriaAlumno[] {
    const filtrardMaterias = this.materias.filter(materia => materia.name.startsWith(letter));
    return filtrardMaterias;
  }

  // update(id: number, updateMateriaDto: UpdateMateriaDto) {
  //   return `This action updates a #${id} materia`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} materia`;
  // }
}

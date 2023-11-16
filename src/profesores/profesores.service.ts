import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { Profesores } from './interfaz/interfaz_profesor';

@Injectable()
export class ProfesoresService {

  porfesor: Profesores [] = [
    {id: 1, name: 'Sebas Chipuxi'},
    {id: 2, name: 'Xavier Erazo'},
    {id: 3, name: 'Alex El Capo'},
    {id: 4, name: 'Andres Carvajal'},
  ]

  create(datos: CreateProfesoreDto) {
    return datos
  }

  findAll() {
    return this.porfesor
  }

  findOne(id) {
    const res = this.porfesor.find(objeto =>objeto.id == parseInt(id));
    if(!res) throw new NotFoundException ('No existe');
    return res
  }
  findLetter(letter: string): Profesores[] {
    const FilterLetter = this.porfesor.filter(profesro => profesro.name.startsWith(letter))
    return FilterLetter
  }

  // update(id: number, updateProfesoreDto: UpdateProfesoreDto) {
  //   return `This action updates a #${id} profesore`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} profesore`;
  // }
}

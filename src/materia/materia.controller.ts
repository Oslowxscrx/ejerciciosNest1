import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MateriaAlumno } from './interfaz/materia1';

@Controller('materia')
export class MateriaController {

  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() datos: CreateMateriaDto) {
    return datos;
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.findOne(id);
  }

  @Get('filter/:letter')
  findLetraA(@Param('letter') letter: string) {
    const filteredMaterias = this.materiaService.findByLetterA(letter);
    return filteredMaterias.length > 0 ? filteredMaterias : 'No se encontraron materias con esa letra inicial.';
  }
  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMateriaDto: UpdateMateriaDto) {
  //   return this.materiaService.update(+id, updateMateriaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.materiaService.remove(+id);
  // }
}

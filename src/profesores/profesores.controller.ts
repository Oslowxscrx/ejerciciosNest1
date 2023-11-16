import { Controller, Get, Post, Body, Patch, Param, Delete, ParseArrayPipe } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Post()
  create(@Body() datos: CreateProfesoreDto) {
    return datos;
  }

  @Get()
  findAll() {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseArrayPipe) id: number) {
    return this.profesoresService.findOne(id);
  }

  @Get('filter/:letter')
    findLetter(@Param('letter') letter: string){
      const filterProfesor = this.profesoresService.findLetter(letter);
      return filterProfesor.length > 0 ? filterProfesor : 'No existen'
    }
  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfesoreDto: UpdateProfesoreDto) {
  //   return this.profesoresService.update(+id, updateProfesoreDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profesoresService.remove(+id);
  // }
}

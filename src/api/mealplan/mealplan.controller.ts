import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MealplanService } from './mealplan.service';
import { CreateMealplanDto } from './dto/create-mealplan.dto';
import { UpdateMealplanDto } from './dto/update-mealplan.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt-refresh'))
@Controller('api/mealplan')
export class MealplanController {
  constructor(private readonly mealplanService: MealplanService) {}

  @Post()
  create(@Request() req: any, @Body() createMealplanDto: CreateMealplanDto) {
    return this.mealplanService.create(req, createMealplanDto);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.mealplanService.findAll(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealplanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealplanDto: UpdateMealplanDto,
  ) {
    return this.mealplanService.update(+id, updateMealplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealplanService.remove(+id);
  }
}

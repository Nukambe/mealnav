import { PartialType } from '@nestjs/mapped-types';
import { CreateMealplanDto } from './create-mealplan.dto';

export class UpdateMealplanDto extends PartialType(CreateMealplanDto) {}

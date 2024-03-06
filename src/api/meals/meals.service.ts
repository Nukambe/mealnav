import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meal } from './entities/meal.entity';
import {
  ArrayContains,
  Between,
  Equal,
  ILike,
  In,
  LessThanOrEqual,
  MoreThanOrEqual,
  Or,
  Repository,
} from 'typeorm';
import { SearchMealDto } from './dto/search-meal.dto';
import { MealDetailDto } from './dto/meal-detail.dto';

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(Meal)
    private mealsRepository: Repository<Meal>,
  ) {}

  async create(createMealDto: CreateMealDto) {
    const meal = await this.mealsRepository.save(createMealDto);
    return meal;
  }

  async findAll(searchMealDto: SearchMealDto) {
    const [meals, count] = await this.mealsRepository.findAndCount({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
      },
      where: {
        id: this.whereInArray(searchMealDto.ids, 'number'),
        name: this.whereName(searchMealDto.name),
        prepTime: this.whereMinMax(
          searchMealDto.minPrepTime,
          searchMealDto.maxPrepTime,
        ),
        cookTime: this.whereMinMax(
          searchMealDto.minCookTime,
          searchMealDto.maxCookTime,
        ),
        // cookingMethod: this.whereInArray(searchMealDto.cookingMethod, 'string'),
        cookingMethod: this.whereInArray(searchMealDto.cookingMethod, 'string'),
        recipeCategory: this.whereEqualString(searchMealDto.recipeCategory),
        recipeCuisine: this.whereInArray(searchMealDto.recipeCuisine, 'string'),
        suitableForDiet: this.whereInArray(
          searchMealDto.suitableForDiet,
          'string',
        ),
        // recipeIngredient:
        aggregateRating: this.whereMinMax(searchMealDto.rating, null),
        keywords: this.whereInArray(searchMealDto.keywords, 'string'),
        calories: this.whereMinMax(
          searchMealDto.minCalories,
          searchMealDto.maxCalories,
        ),
        fat: this.whereMinMax(searchMealDto.minFat, searchMealDto.maxFat),
        protein: this.whereMinMax(
          searchMealDto.minProtein,
          searchMealDto.maxProtein,
        ),
        carbs: this.whereMinMax(searchMealDto.minCarbs, searchMealDto.maxCarbs),
        sugar: this.whereMinMax(searchMealDto.minSugar, searchMealDto.maxSugar),
        fiber: this.whereMinMax(searchMealDto.minFiber, searchMealDto.maxFiber),
        cholesterol: this.whereMinMax(
          searchMealDto.minCholesterol,
          searchMealDto.maxCholesterol,
        ),
        sodium: this.whereMinMax(
          searchMealDto.minSodium,
          searchMealDto.maxSodium,
        ),
      },
      take: +searchMealDto.limit || undefined,
      skip: +searchMealDto.offset || 0,
      order: {
        [searchMealDto.sort || 'id']: searchMealDto.order || 'ASC',
      },
    });
    return { meals, count };
  }

  async findOne(id: number) {
    const meal = await this.mealsRepository.findOneBy({ id });
    const mealDetail = new MealDetailDto(meal);
    return mealDetail;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }

  private whereInArray(query: string, type: 'string' | 'number') {
    if (!query) return undefined;
    const values = query.split(',');
    console.log(values);
    if (type === 'number') {
      return In(values.map((value) => +value));
    }
    return Or(...values.map((value) => ArrayContains([value])));
  }

  private whereName(name: string) {
    if (!name) return undefined;
    return ILike(`%${name}%`);
  }

  private whereEqualString(query: string) {
    if (!query) return undefined;
    return Equal(query);
  }

  private whereMinMax(min: string, max: string) {
    console.log('min', min);
    console.log('max', max);
    if (!min && !max) return undefined;
    if (min && !max) {
      return MoreThanOrEqual(+min);
    }
    if (!min && max) {
      console.log('max', max);
      return LessThanOrEqual(+max);
    }
    return Between(+min, +max);
  }
}

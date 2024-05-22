import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { Diet } from './entities/diet.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Diet)
    private dietRepository: Repository<Diet>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto[]) {
    // return this.categoryRepository.save(createCategoryDto);
    return this.dietRepository.save(createCategoryDto);
  }

  async findAll() {
    return {
      categories: await this.categoryRepository.find(),
      diets: await this.dietRepository.find(),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}

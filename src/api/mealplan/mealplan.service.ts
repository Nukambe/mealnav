import { Injectable } from '@nestjs/common';
import { CreateMealplanDto } from './dto/create-mealplan.dto';
import { UpdateMealplanDto } from './dto/update-mealplan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mealplan } from './entities/mealplan.entity';
import { Meal } from 'src/api/meals/entities/meal.entity';
import { User } from 'src/api/users/entities/user.entity';
import { Request } from 'express';
import { JwtPayload } from '../auth/strategies/at.strategy';
import { MealDto } from '../meals/dto/meal.dto';

@Injectable()
export class MealplanService {
  constructor(
    @InjectRepository(Mealplan)
    private mealplanRepository: Repository<Mealplan>,
    @InjectRepository(Meal)
    private mealRepository: Repository<Meal>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(req: Request, createMealplanDto: CreateMealplanDto) {
    const { plan } = createMealplanDto;

    const userId = (req.user as JwtPayload).sub;
    const user = await this.userRepository.findOne({
      select: ['id'],
      where: { id: userId },
    });

    const mealplan = this.mealplanRepository.save(
      await Promise.all(
        plan.map(async (p) => ({
          date: new Date(p.date),
          meal: await this.mealRepository.findOneBy({ id: p.meal }),
          user,
        })),
      ),
    );

    return mealplan;
  }

  async findAll(req: Request) {
    const userId = (req.user as JwtPayload).sub;
    const user = await this.userRepository.findOne({
      select: ['id'],
      where: { id: userId },
    });

    const mealplan = await this.mealplanRepository.find({
      where: { user },
      relations: ['meal'],
    });

    return mealplan.map((mp) => ({
      id: mp.id,
      date: mp.date,
      meal: new MealDto(mp.meal),
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} mealplan`;
  }

  update(id: number, updateMealplanDto: UpdateMealplanDto) {
    return `This action updates a #${id} mealplan`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealplan`;
  }
}

import { Meal } from 'src/api/meals/entities/meal.entity';
import { User } from 'src/api/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Mealplan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.mealplans, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date: Date;

  @ManyToOne(() => Meal, (meal) => meal.mealPlans, { onDelete: 'CASCADE' })
  meal: Meal;
}

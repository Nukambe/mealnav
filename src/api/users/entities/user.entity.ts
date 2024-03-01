import { Mealplan } from 'src/api/mealplan/entities/mealplan.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 100, unique: true, nullable: false })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  refreshToken: string;

  @OneToMany(() => Mealplan, (mealplan) => mealplan.user)
  mealplans: Mealplan[];
}

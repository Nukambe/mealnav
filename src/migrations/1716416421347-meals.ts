import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Meals1716416421347 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'meal',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'prepTime',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'cookTime',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'cookingMethod',
            type: 'text',
            isArray: true,
            isNullable: false,
          },
          {
            name: 'calories',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'fat',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'protein',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'carbs',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'sugar',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'fiber',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'cholesterol',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'sodium',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'recipeCategory',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'recipeCuisine',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'recipeInstructions',
            type: 'jsonb',
            isNullable: false,
          },
          {
            name: 'recipeYield',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'suitableForDiet',
            type: 'text',
            isArray: true,
            isNullable: true,
          },
          {
            name: 'recipeIngredient',
            type: 'jsonb',
            isNullable: false,
          },
          {
            name: 'aggregateRating',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'keywords',
            type: 'text',
            isArray: true,
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
      true,
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('meal');
  }
}

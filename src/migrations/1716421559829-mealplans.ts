import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Mealplans1716421559829 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mealplan',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'date',
            type: 'date',
            default: 'CURRENT_DATE',
          },
          {
            name: 'userId',
            type: 'uuid',
            foreignKeyConstraintName: 'mealplan_userId_fkey',
          },
          {
            name: 'mealId',
            type: 'int',
            foreignKeyConstraintName: 'mealplan_mealId_fkey',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['mealId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'meal',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
      true,
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mealplan');
  }
}

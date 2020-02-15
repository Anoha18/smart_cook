import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity('t_item')
export class RecipeModel {
  @PrimaryColumn()
  item_id: number;
};


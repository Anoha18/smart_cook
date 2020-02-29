import t = require('typeorm');

@t.Entity('t_item')
class RecipeModel {
  @t.PrimaryColumn()
  item_id: number;
};

export = RecipeModel;

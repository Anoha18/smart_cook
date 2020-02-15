// import {Entity, Column, PrimaryColumn} from 'typeorm';
import t = require('typeorm')

@t.Entity('t_user')
class UserModel {
  @t.PrimaryColumn()
  user_id: number;

  @t.Column()
  name: string;

  @t.Column()
  lastname: string;

  @t.Column()
  phone: string;

  @t.Column()
  email: string;

  @t.Column()
  deleted: boolean
};

export = UserModel;

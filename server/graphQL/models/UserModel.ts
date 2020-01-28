const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity('t_user')
class UserModel {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  deleted: boolean
};

module.exports = UserModel;

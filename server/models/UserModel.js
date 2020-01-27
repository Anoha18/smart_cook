const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity():@Entity('t_user')
export class UserModel {
  @PrimaryGeneratedColumn()
  user_id: Number,

  @Column()
  name: String,

  @Column()
  lastname: String,

  @Column()
  phone: String,

  @Column()
  email: String,

  @Column()
  deleted: Boolean
}

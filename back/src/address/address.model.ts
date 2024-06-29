import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Order } from '../order/order.model';

@Table
export class Address extends Model<Address> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Order)
  orders: Order[];
}
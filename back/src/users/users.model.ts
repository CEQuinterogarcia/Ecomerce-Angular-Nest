import { Column, Model, Table, DataType, HasMany, HasOne } from 'sequelize-typescript';
import { Address } from '../address/address.model';
import { Order } from '../order/order.model';
import { Cart } from '../cart/cart.model';
import { Review } from '../reviews/reviews.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @HasMany(() => Address)
  addresses: Address[];

  @HasMany(() => Order)
  orders: Order[];

  @HasOne(() => Cart)
  cart: Cart;

  @HasMany(() => Review)
  reviews: Review[];
}
import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Address } from '../address/address.model';
import { OrderDetail } from '../order_details/order_details.model';
import { Payment } from '../payment/payment.model';

@Table
export class Order extends Model<Order> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  addressId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  orderDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Address)
  address: Address;

  @HasMany(() => OrderDetail)
  orderDetails: OrderDetail[];

  @HasOne(() => Payment)
  payment: Payment;
}
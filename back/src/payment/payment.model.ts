import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from '../order/order.model';

@Table
export class Payment extends Model<Payment> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  paymentDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paymentMethod: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paymentStatus: string;

  @BelongsTo(() => Order)
  order: Order;
}
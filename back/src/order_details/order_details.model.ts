import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from '../order/order.model';
import { Product } from '../product/product.model';

@Table
export class OrderDetail extends Model<OrderDetail> {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  unitPrice: number;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Product)
  product: Product;
}
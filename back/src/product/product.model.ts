import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Category } from '../category/category.model';
import { OrderDetail } from '../order_details/order_details.model';
import { CartProduct } from '../cart_product/cart_product.model';
import { Review } from '../reviews/reviews.model';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => OrderDetail)
  orderDetails: OrderDetail[];

  @HasMany(() => CartProduct)
  cartProducts: CartProduct[];

  @HasMany(() => Review)
  reviews: Review[];
}
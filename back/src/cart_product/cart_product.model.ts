import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cart } from '../cart/cart.model';
import { Product } from '../product/product.model';

@Table
export class CartProduct extends Model<CartProduct> {
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cartId: number;

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

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => Product)
  product: Product;
}
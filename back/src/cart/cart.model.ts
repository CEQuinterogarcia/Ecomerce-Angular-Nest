import { Column, Model, Table, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { CartProduct } from '../cart_product/cart_product.model';

@Table
export class Cart extends Model<Cart> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  creationDate: Date;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => CartProduct)
  cartProducts: CartProduct[];
}
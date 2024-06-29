import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Product } from '../product/product.model';

@Table
export class Review extends Model<Review> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  comment: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => User)
  user: User;
}
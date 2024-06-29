import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.model';
import { Category } from '../category/category.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
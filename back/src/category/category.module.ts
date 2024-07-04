import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Product } from 'src/product/product.model';
import { Category } from './category.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}

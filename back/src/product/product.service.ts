import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({
      where: { id },
    });
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    await product.update(updateProductDto);
    return product;
  }
}

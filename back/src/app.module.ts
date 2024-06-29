import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import  pg  from "pg";

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { CartProductModule } from './cart_product/cart_product.module';
import { AddressModule } from './address/address.module';                                             
import { User } from './users/users.model';
import { Address } from './address/address.model';
import { Cart } from './cart/cart.model';
import { CartProduct } from './cart_product/cart_product.model';
import { Category } from './category/category.model';
import { Order } from './order/order.model';
import { OrderDetail } from './order_details/order_details.model';
import { Payment } from './payment/payment.model';
import { Product } from './product/product.model';
import { Review } from './reviews/reviews.model';



@Module({
 imports:[
  SequelizeModule.forRoot({
    dialect: 'postgres',
    dialectModule: pg, 
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'ecomerce',
    autoLoadModels: true,
    synchronize: true,
    models: [User, Address, Cart, CartProduct, Category, Order, OrderDetail, Payment, Product, Review],
  }),
  UsersModule, 
  ReviewsModule, 
  ProductModule, 
  PaymentModule, 
  OrderModule, 
  OrderModule, 
  CategoryModule, 
  CartModule, 
  CartProductModule, 
  AddressModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

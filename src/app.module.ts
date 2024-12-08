import { Module } from '@nestjs/common';
import { User,auth,misteryboxes,restaurants,cart,paymentModule } from './user,auth,misteryboxes,restaurants,cart,payment/user,auth,misteryboxes,restaurants,cart,payment.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MisteryBoxesModule } from './mistery-boxes/mistery-boxes.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [User,auth,misteryboxes,restaurants,cart,paymentModule, UserModule, AuthModule, MisteryBoxesModule, RestaurantsModule, CartModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

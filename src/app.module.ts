import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MisteryBoxesModule } from './mistery-boxes/mistery-boxes.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MisteryBoxesModule,
    RestaurantsModule,
    CartModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
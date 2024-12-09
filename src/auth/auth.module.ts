import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/secrets/const';

@Module({
  imports: [JwtModule.register({ secret: JWT_SECRET }), PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

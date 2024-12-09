import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CLIENT_ID } from 'src/secrets/const';
import { UserService } from 'src/user/user.service';
import { AuthInputDto } from './dto/auth-input.dto';

@Injectable()
export class AuthService {
  private googleClient: OAuth2Client;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {
    this.googleClient = new OAuth2Client(CLIENT_ID);
  }

  async validateUser(login: AuthInputDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: login.email },
      });
      if (!user) {
        throw new NotFoundException('USUARIO_NO_ENCONTRADO');
      }
      const unhashPassword = await bcrypt.compare(
        login.password,
        user.password,
      );

      if (user && unhashPassword) {
        return {
          id: user.id,
          email: user.email,
        };
      }
      return null;
    } catch (e) {
      throw new InternalServerErrorException('ERROR_INNESPERADO', e);
    }
  }

  async auth(login: AuthInputDto) {
    try {
      const user = await this.validateUser(login);
      if (!user) {
        throw new UnauthorizedException();
      }
      return this.login(login);
    } catch (e) {
      throw new InternalServerErrorException('ERROR_INNESPERADO', e);
    }
  }

  async login(user: AuthInputDto, validateUser: { id: number; email: string }) {
    try {
      const payload = {
        sub: validateUser.id,
        email: validateUser.email,
      };
      const token = await this.jwtService.signAsync(payload);
      return {
        token,
        id: validateUser.id,
        email: validateUser.email,
      };
    } catch (e) {
      throw new InternalServerErrorException('ERROR_INNESPERADO', e);
    }
  }

  generateRandomPassword(length = 16) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const allChars = lowercase + uppercase + numbers + symbols;

    let password = '';
    const randomBytes = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytes[i] % allChars.length;
      password += allChars[randomIndex];
    }

    return password;
  }
}

import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { User, Bookmark } from '@prisma/client';
import * as argon from 'argon2';
import { AuthDto } from './InterfaceAuth';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export default class AuthService {
  constructor(private prisma: PrismaService) {}
  // асинхронная из-за вызова призмы
  async signup(dto: AuthDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);
    // save user in db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      // если ошибка относится к призме и поле уже есть в базе (код призмы)
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        // попадет в error.message
        throw new ForbiddenException('Credentials taken');
      }

      throw error;
    }
    // return saved user
  }

  signin() {
    return { msg: "I've signed in" };
  }
}

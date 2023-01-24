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

  async signin(dto: AuthDto) {
    // find user by email (by unique prop)
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if no user throw exception
    if (!user) throw new ForbiddenException('Incorrect credentials');
    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Incorrect password');

    // send back the user
    delete user.hash;
    return user;
  }
}

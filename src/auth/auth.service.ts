import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export default class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: "I've signed up" };
  }

  signin() {
    return { msg: "I've signed in" };
  }
}

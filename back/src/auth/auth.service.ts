import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Bookmark } from '@prisma/client';

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
import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import AuthService from './auth.service';
import { AuthDto } from './InterfaceAuth';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  // post auth/signup
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

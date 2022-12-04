import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDTO) {
    return this.service.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDTO) {
    return this.service.login(dto);
  }
}

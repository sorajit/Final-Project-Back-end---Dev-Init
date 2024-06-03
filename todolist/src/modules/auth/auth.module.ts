import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
const secret_key = process.env.JWTKEY || 'ThisKeyUsingForBornToDevDB';
@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: secret_key,
      signOptions: { expiresIn: '1d' },
  }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
]
})
export class AuthModule {}

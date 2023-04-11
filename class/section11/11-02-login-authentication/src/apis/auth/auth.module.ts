import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}), // 설정도 줄 수 있음
    UsersModule, //
  ],

  providers: [
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}

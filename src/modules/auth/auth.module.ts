import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { SharedModule } from 'src/shared/shared.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'JWT_SECRET',
    }),
    SharedModule,
    UserModule
  ]
  ,providers: [AuthService, AuthResolver ,JwtStrategy]
})
export class AuthModule {}

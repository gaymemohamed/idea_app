import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [UserResolver, UserService],
  imports:[
    SharedModule
  ],
  exports:[
    UserService
  ]
})
export class UserModule {}

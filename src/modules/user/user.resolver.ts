import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { signUpDto } from './dto/signUp.dto';
import { loginDto } from '../auth/dto/login.dto';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Mutation(returns => User)
    async signUp(@Args('userInfo') userInfo: signUpDto) {
        return this.userService.signUp(userInfo);
    }
}

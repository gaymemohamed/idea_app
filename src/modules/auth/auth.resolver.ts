import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { Auth } from './models/auth.model';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ){}

    @Mutation(returns =>Auth)
    async login(@Args('loginInfo') {email , password} : loginDto) :Promise<Auth> {
        return this.authService.login(email, password);
    }
}

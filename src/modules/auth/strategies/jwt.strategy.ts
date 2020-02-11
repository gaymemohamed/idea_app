import {PassportStrategy} from '@nestjs/passport';
import {Strategy , ExtractJwt} from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly userSerivce: UserService
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'JWT_SECRET',
            ignoreExpiration: false,
        })      
    }
    async validate(payload : JwtPayload){
        return await this.userSerivce.getUserById(payload.sub);
    }
}
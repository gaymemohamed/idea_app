import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Auth } from './models/auth.model';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaClientService,
        private readonly jwtService : JwtService

    ){}
    
    async login(email : string  , password : string): Promise<Auth> {
        const user = await this.prisma.user.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new ConflictException("Invalid Email or Password");
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            throw new ConflictException("Invalid Email or Password")
        }
        const payload : JwtPayload = {email : user.email , sub : user.id};
        const accessToken = await this.jwtService.sign(payload);
        
        return {
            token: accessToken,
            user : user
        };
    }


}

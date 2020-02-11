import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { signUpDto } from './dto/signUp.dto';


@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaClientService
    ) { }
    
    async signUp(userInfo: signUpDto): Promise<User> {
        const userExist = await this.prisma.user.findOne({
            where: { email: userInfo.email }
        });
        const salt = await bcrypt.genSalt();
        if (userExist) {
            throw new ConflictException("Invalid Email or password");
        }
        return await this.prisma.user.create({
            data: {
                username: userInfo.username,
                email: userInfo.email,
                password: await bcrypt.hash(userInfo.password, salt)
            }

        })

    }

    async getUserById(userId : string): Promise<User>{
        return await this.prisma.user.findOne({
            where:{
                id : userId
            }
        })
    }
    

}

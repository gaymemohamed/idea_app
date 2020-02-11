import { Injectable } from '@nestjs/common';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { Idea } from '@prisma/client';
import { createIdeaDto } from './dto/create-idea.dto';
import { userInfo } from 'os';

@Injectable()
export class IdeaService {
    constructor(
        private readonly prisma: PrismaClientService
    ){}
    async createIdea (user_id: string,IdeaInfo : createIdeaDto ): Promise<Idea>{
        return await this.prisma.idea.create({
            data:{
                idea : IdeaInfo.idea,
                decription : IdeaInfo.description,
                user:{
                    connect:{
                        id : user_id
                    }
                }
            }
            
        })
    }

    async getAllIdeas(): Promise<Idea[]>{
        return this.prisma.idea.findMany({})
    }
    
    
}

import { Resolver ,Query, Mutation, Args} from '@nestjs/graphql';
import { IdeaService } from './idea.service';
import { Idea } from './model/idea.model';
import { createIdeaDto } from './dto/create-idea.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/graphql-auth-guard';
import { AuthUser } from 'src/decerators/gql.user.decorator';
import { User } from '../user/model/user.model';


@Resolver(of=> Idea)
export class IdeaResolver {
    constructor(
        private readonly ideaService : IdeaService,
    ){}

    @UseGuards(GqlAuthGuard)
    @Mutation(returns=> Idea)
    async createIdea(
        @Args("ideaInfo") ideaInfo : createIdeaDto , 
        @AuthUser() user: User
        ){
        return await this.ideaService.createIdea(user.id,ideaInfo);
    }

    @UseGuards(GqlAuthGuard)
    @Query(returns=> [Idea])
    async getAllIdeas(
        @AuthUser() user: User
    ){
        return await this.ideaService.getAllIdeas();
    }
}

import { InterfaceType, Field, ID } from 'type-graphql'
import { Idea } from 'src/modules/idea/model/idea.model';

@InterfaceType()
export abstract class UserInterface {
    @Field(type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    salt?:string

    @Field()
    cratedAt: Date;

    @Field(type=> [Idea])
    ideas ?: Idea[];

}
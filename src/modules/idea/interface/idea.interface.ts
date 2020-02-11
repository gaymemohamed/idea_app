import {InterfaceType, Field, ID} from 'type-graphql'
import { User } from 'src/modules/user/model/user.model';
@InterfaceType()
export abstract class IdeaInterface {
    @Field(type=> ID )
    id : string; 

    @Field()
    idea : string;
    
    @Field()
    decription : string;

    @Field()
    cratedAt : Date;

    @Field(type=> User)
    author : User
}
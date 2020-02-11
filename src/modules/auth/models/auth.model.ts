import { ObjectType, Field } from "type-graphql";
import { User } from "../../user/model/user.model";

@ObjectType()
export class Auth{
    @Field()
    token : string

    @Field(type=> User)
    user : User
}
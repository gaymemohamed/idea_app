import { ObjectType } from "type-graphql";
import { UserInterface } from '../interface/user.interface'
import { Idea } from "src/modules/idea/model/idea.model";

@ObjectType({ implements: UserInterface })

export class User implements UserInterface {
    ideas?: Idea[];
    id: string;
    username: string;
    email: string;
    password: string;
    salt?: string;
    cratedAt: Date;
}
import { ObjectType } from "type-graphql";
import {IdeaInterface} from '../interface/idea.interface'
import { User } from "src/modules/user/model/user.model";


@ObjectType({implements : IdeaInterface})
export class Idea implements IdeaInterface{
    author: User;
    id: string;
    idea: string;
    decription: string;
    cratedAt: Date;
}
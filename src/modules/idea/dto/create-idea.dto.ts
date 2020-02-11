import { InputType, Field, ID } from "type-graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class createIdeaDto {
    @Field()
    @IsNotEmpty()
    idea: string;

    @Field()
    @IsString()
    description: string;
}
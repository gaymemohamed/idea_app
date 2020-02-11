import { InputType, Field } from "type-graphql";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

@InputType()
export class signUpDto {
    @Field()
    @IsNotEmpty()
    @IsString()
    username : string;

    @Field()
    @IsString()
    @IsEmail()
    email : string;

    @Field()
    @IsString()
    password : string;

 
}
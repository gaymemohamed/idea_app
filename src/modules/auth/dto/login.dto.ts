import { InputType, Field } from "type-graphql";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

@InputType()
export class loginDto {
    @Field()
    @IsEmail()
    email : string;

    @Field()
    @IsString()
    password : string;

 
}
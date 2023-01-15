import {IsEmail,IsString,IsNotEmpty } from "class-validator";

export class  UserDto {
    @IsString()
    @IsNotEmpty()
    fullname:string;
    
    @IsEmail()
    email:string;
   
    @IsNotEmpty()
    age:string;
    @IsString()
    @IsNotEmpty()
    country:string;
}
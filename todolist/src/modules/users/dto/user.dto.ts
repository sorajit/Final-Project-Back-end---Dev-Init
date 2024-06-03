import { IsNotEmpty, MinLength, IsEmail, IsEnum, IsString, isString } from 'class-validator';
export class UserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
    
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    readonly created_at: Date;
    readonly last_loging: Date;
}
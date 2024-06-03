import { IsNotEmpty, IsDateString } from 'class-validator';

export class LogDto {
    @IsNotEmpty()
    readonly content: string;

    @IsDateString()
    readonly date: string;
}
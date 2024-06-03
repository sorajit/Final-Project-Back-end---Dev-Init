import { IsNotEmpty, IsDateString, IsString, MaxLength } from 'class-validator';

export class EventDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsDateString()
    readonly start_date: string;

    @IsNotEmpty()
    @IsDateString()
    readonly end_date: string;
}
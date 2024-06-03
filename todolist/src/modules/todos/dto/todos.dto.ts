import { IsNotEmpty, IsDateString, IsEnum, IsString, MaxLength, IsPositive } from 'class-validator';

enum Status{
    pending = 'pending',
    completed = 'completed',
}
export class TodoDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsDateString()
    readonly due_date: string;

    @IsNotEmpty()
    @IsPositive()
    readonly priority: number;

    @IsNotEmpty()
    @IsEnum(Status, {
        message: 'status must be either pending or completed.',
    })
    readonly status: Status;
}
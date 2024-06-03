import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
export declare class Log extends Model<Log> {
    log_id: number;
    content: string;
    date: string;
    formattedDate: string;
    createdAt: Date;
    updatedAt: Date;
    user_id: number;
    user: User;
}

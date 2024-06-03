import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
export declare class Event extends Model<Event> {
    event_id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    formatted_startDate: string;
    formatted_endDate: string;
    createdAt: Date;
    updatedAt: Date;
    user_id: number;
    user: User;
}

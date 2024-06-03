import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
export declare class Todo extends Model<Todo> {
    todo_id: number;
    title: string;
    description: string;
    due_date: string;
    formattedDate: string;
    priority: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user_id: number;
    user: User;
}

import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    user_id: number;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    last_login: Date;
}

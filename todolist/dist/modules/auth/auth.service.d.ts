import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        user_id: number;
        username: string;
        email: string;
        createdAt: Date;
        last_login: Date;
        id?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        _attributes: import("../users/user.entity").User;
        dataValues: import("../users/user.entity").User;
        _creationAttributes: import("../users/user.entity").User;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<import("../users/user.entity").User, import("../users/user.entity").User>;
    }>;
    login(user: any): Promise<{
        message: string;
        token: string;
    }>;
    create(user: any): Promise<{
        message: string;
        token: string;
    }>;
    private generateToken;
    private hashPassword;
    private comparePassword;
}

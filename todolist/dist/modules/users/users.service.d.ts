import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneById(user_id: number): Promise<User>;
    findOneByUserName(username: string): Promise<User>;
}

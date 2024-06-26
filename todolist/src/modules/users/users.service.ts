import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User){}

    async create(user: UserDto): Promise<User>{
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: {email}});
    }

    async findOneById(user_id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: {user_id}});
    }

    async findOneByUserName(username: string): Promise<User>{
        return await this.userRepository.findOne<User>({where: {username}})
    }
}

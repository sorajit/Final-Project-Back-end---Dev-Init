import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../modules/users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
    constructor(private readonly userService: UsersService) {}

    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const userExistByEmail = await this.userService.findOneByEmail(request.body.email);
        const userExistByUserName = await this.userService.findOneByUserName(request.body.username);
        if (userExistByEmail) {
            throw new ForbiddenException('Error due to existing email');
        }
        if (userExistByUserName) {
            throw new ForbiddenException('Error due to existing username');
        }
        return true;
    }
}
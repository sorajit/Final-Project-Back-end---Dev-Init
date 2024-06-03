import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Log } from './log.entity';
import { LogDto } from './dto/log.dto';
import { Log_REPOSITORY } from 'src/core/constants';
import { UpdateLogDto } from './dto/updatalog.dto';
@Injectable()
export class LogService {
    constructor(@Inject(Log_REPOSITORY) private readonly logRepository: typeof Log) { }
    
    async create(log: LogDto, user_id): Promise<Log> {
        return await this.logRepository.create<Log>({ ...log, user_id });
    }

    async findAll(user_id): Promise<Log[]> {
        return await this.logRepository.findAll<Log>({
            where: {user_id},
    	});
    }

    async findOne(log_id, user_id): Promise<Log> {
        const log = await this.logRepository.findOne({
        	where: { log_id, user_id }
    	}); 
        if(!log){
            throw new NotFoundException('This daily log doesn\'t exist');
        }
        return log
    }

    async update(log_id: number, updateLog: UpdateLogDto, user_id: number) {
        const log = await this.findOne(log_id,user_id);

        const [numberOfAffectedRows, [updatedResult]] = await this.logRepository.update({...log['dataValues'], ...updateLog }, { where: { log_id, user_id }, returning: true });

        return updatedResult;
    }

    async delete(log_id, user_id) {
        return await this.logRepository.destroy({ where: { log_id, user_id } });
    }
}

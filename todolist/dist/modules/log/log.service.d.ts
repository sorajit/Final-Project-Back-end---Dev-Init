import { Log } from './log.entity';
import { LogDto } from './dto/log.dto';
import { UpdateLogDto } from './dto/updatalog.dto';
export declare class LogService {
    private readonly logRepository;
    constructor(logRepository: typeof Log);
    create(log: LogDto, user_id: any): Promise<Log>;
    findAll(user_id: any): Promise<Log[]>;
    findOne(log_id: any, user_id: any): Promise<Log>;
    update(log_id: number, updateLog: UpdateLogDto, user_id: number): Promise<Log>;
    delete(log_id: any, user_id: any): Promise<number>;
}

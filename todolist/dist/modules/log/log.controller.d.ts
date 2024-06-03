import { LogService } from './log.service';
import { Log as LogEntity } from './log.entity';
import { LogDto } from './dto/log.dto';
import { UpdateLogDto } from './dto/updatalog.dto';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    findAll(req: any): Promise<LogEntity[]>;
    findOne(id: number, req: any): Promise<LogEntity>;
    create(log: LogDto, req: any): Promise<LogEntity>;
    update(id: number, log: UpdateLogDto, req: any): Promise<LogEntity>;
    delete(id: number, req: any): Promise<string>;
}

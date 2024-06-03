import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LogService } from './log.service';
import { Log as LogEntity} from './log.entity';
import { LogDto } from './dto/log.dto';
import { UpdateLogDto } from './dto/updatalog.dto';

@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll( @Request() req){
        return await this.logService.findAll(req.user.user_id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number, @Request() req): Promise<LogEntity>{
        return await this.logService.findOne(id, req.user.user_id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() log: LogDto, @Request() req): Promise<LogEntity>{
        return await this.logService.create(log, req.user.user_id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() log: UpdateLogDto, @Request() req): Promise<LogEntity> {
       return await this.logService.update(id, log, req.user.user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id: number, @Request() req){
        const deleted = await this.logService.delete(id, req.user.user_id)
        if (deleted ===0) {
            throw new NotFoundException('This Daily Log doesn\'t exist');
        }
        return  'Successfully deleted';
    }
}

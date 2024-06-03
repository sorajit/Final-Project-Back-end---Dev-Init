import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { AuthGuard } from '@nestjs/passport';
import { Event as  EventsEntity } from './events.entity';
import { EventDto } from './dto/event.dto';
import { UpdateEventDto } from './dto/updateevent.dto';
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(@Request() req){
        return this.eventsService.findAll(req.user.user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number, @Request() req): Promise<EventsEntity>{
        return this.eventsService.findOne(id, req.user.user_id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() event: EventDto, @Request() req): Promise<EventsEntity>{
        return await this.eventsService.create(event, req.user.user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() updateEvent: UpdateEventDto, @Request() req): Promise<EventsEntity> {
        const updatedEvent = await this.eventsService.update(id, updateEvent, req.user.user_id);
        return updatedEvent;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id: number, @Request() req){
        const deleted = await this.eventsService.delete(id, req.user.user_id)
        if (deleted ===0) {
            throw new NotFoundException('This to-do doesn\'t exist');
        }
        return  'Successfully deleted';
    }
}

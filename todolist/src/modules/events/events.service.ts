import { Injectable,Inject, NotFoundException, ForbiddenException } from '@nestjs/common';
import { Event } from './events.entity';
import { EventDto } from './dto/event.dto';
import { Events_REPOSITORY } from 'src/core/constants';
import { UpdateEventDto } from './dto/updateevent.dto';

@Injectable()
export class EventsService {
    constructor(@Inject(Events_REPOSITORY) private readonly eventsRepository: typeof Event){}

    async create(event: EventDto, user_id: number): Promise<Event>{
        if(new Date(event.end_date) <= new Date(event.start_date)){
            throw new ForbiddenException("end date should be after start date");
        }
        return await this.eventsRepository.create<Event>({...event, user_id})
    }

    async findAll(user_id: number): Promise<Event[]>{
        return await this.eventsRepository.findAll<Event>({
            where: {user_id},
        })
    }

    async findOne(event_id: number, user_id: number): Promise<Event>{
        const event = await this.eventsRepository.findOne<Event>({
            where: {event_id, user_id},
        });
        if(!event){
            throw new NotFoundException('This To-do doesn\'t exist');
        }
        return event
    }

    async update(event_id: number, updateTodo: UpdateEventDto, user_id: number){
        const event = await this.findOne(event_id,user_id);
        const updateEvent = {...event['dataValues'],...updateTodo};

        if(new Date(updateEvent.end_date) <= new Date(updateEvent.start_date)){
            throw new ForbiddenException("end date should be after start date");
        }
        
        const [numberOfAffectedRows, [updateResult]] = await this.eventsRepository.update(
            updateEvent,
            { where: {event_id, user_id}, returning: true}
        )
        return updateResult
    }

    async delete(event_id: number, user_id: number){
        return await this.eventsRepository.destroy({ where: { event_id, user_id } });
    }
}

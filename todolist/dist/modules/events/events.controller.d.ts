import { EventsService } from './events.service';
import { Event as EventsEntity } from './events.entity';
import { EventDto } from './dto/event.dto';
import { UpdateEventDto } from './dto/updateevent.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(req: any): Promise<EventsEntity[]>;
    findOne(id: number, req: any): Promise<EventsEntity>;
    create(event: EventDto, req: any): Promise<EventsEntity>;
    update(id: number, updateEvent: UpdateEventDto, req: any): Promise<EventsEntity>;
    delete(id: number, req: any): Promise<string>;
}

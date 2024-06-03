import { Event } from './events.entity';
import { EventDto } from './dto/event.dto';
import { UpdateEventDto } from './dto/updateevent.dto';
export declare class EventsService {
    private readonly eventsRepository;
    constructor(eventsRepository: typeof Event);
    create(event: EventDto, user_id: number): Promise<Event>;
    findAll(user_id: number): Promise<Event[]>;
    findOne(event_id: number, user_id: number): Promise<Event>;
    update(event_id: number, updateTodo: UpdateEventDto, user_id: number): Promise<Event>;
    delete(event_id: number, user_id: number): Promise<number>;
}

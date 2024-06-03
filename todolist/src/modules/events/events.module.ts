import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { eventsProviders } from './events.provders';
@Module({
  providers: [EventsService, ...eventsProviders],
  controllers: [EventsController]
})
export class EventsModule {}

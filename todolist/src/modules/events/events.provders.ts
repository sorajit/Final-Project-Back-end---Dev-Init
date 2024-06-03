import { Event } from "./events.entity";
import { Events_REPOSITORY } from "src/core/constants";

export const eventsProviders = [{
    provide: Events_REPOSITORY,
    useValue: Event,
}];
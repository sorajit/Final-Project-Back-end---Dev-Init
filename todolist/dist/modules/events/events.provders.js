"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsProviders = void 0;
const events_entity_1 = require("./events.entity");
const constants_1 = require("../../core/constants");
exports.eventsProviders = [{
        provide: constants_1.Events_REPOSITORY,
        useValue: events_entity_1.Event,
    }];
//# sourceMappingURL=events.provders.js.map
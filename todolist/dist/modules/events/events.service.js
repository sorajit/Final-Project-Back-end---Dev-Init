"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let EventsService = class EventsService {
    constructor(eventsRepository) {
        this.eventsRepository = eventsRepository;
    }
    async create(event, user_id) {
        if (new Date(event.end_date) <= new Date(event.start_date)) {
            throw new common_1.ForbiddenException("end date should be after start date");
        }
        return await this.eventsRepository.create({ ...event, user_id });
    }
    async findAll(user_id) {
        return await this.eventsRepository.findAll({
            where: { user_id },
        });
    }
    async findOne(event_id, user_id) {
        const event = await this.eventsRepository.findOne({
            where: { event_id, user_id },
        });
        if (!event) {
            throw new common_1.NotFoundException('This To-do doesn\'t exist');
        }
        return event;
    }
    async update(event_id, updateTodo, user_id) {
        const event = await this.findOne(event_id, user_id);
        const updateEvent = { ...event['dataValues'], ...updateTodo };
        if (new Date(updateEvent.end_date) <= new Date(updateEvent.start_date)) {
            throw new common_1.ForbiddenException("end date should be after start date");
        }
        const [numberOfAffectedRows, [updateResult]] = await this.eventsRepository.update(updateEvent, { where: { event_id, user_id }, returning: true });
        return updateResult;
    }
    async delete(event_id, user_id) {
        return await this.eventsRepository.destroy({ where: { event_id, user_id } });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Events_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], EventsService);
//# sourceMappingURL=events.service.js.map
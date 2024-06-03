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
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let LogService = class LogService {
    constructor(logRepository) {
        this.logRepository = logRepository;
    }
    async create(log, user_id) {
        return await this.logRepository.create({ ...log, user_id });
    }
    async findAll(user_id) {
        return await this.logRepository.findAll({
            where: { user_id },
        });
    }
    async findOne(log_id, user_id) {
        const log = await this.logRepository.findOne({
            where: { log_id, user_id }
        });
        if (!log) {
            throw new common_1.NotFoundException('This daily log doesn\'t exist');
        }
        return log;
    }
    async update(log_id, updateLog, user_id) {
        const log = await this.findOne(log_id, user_id);
        const [numberOfAffectedRows, [updatedResult]] = await this.logRepository.update({ ...log['dataValues'], ...updateLog }, { where: { log_id, user_id }, returning: true });
        return updatedResult;
    }
    async delete(log_id, user_id) {
        return await this.logRepository.destroy({ where: { log_id, user_id } });
    }
};
exports.LogService = LogService;
exports.LogService = LogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Log_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], LogService);
//# sourceMappingURL=log.service.js.map
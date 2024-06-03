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
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let TodosService = class TodosService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo, user_id) {
        return await this.todoRepository.create({ ...todo, user_id });
    }
    async findAll(user_id) {
        return await this.todoRepository.findAll({
            where: { user_id },
        });
    }
    async findOne(todo_id, user_id) {
        const todo = await this.todoRepository.findOne({
            where: { todo_id, user_id },
        });
        if (!todo) {
            throw new common_1.NotFoundException('This To-do doesn\'t exist');
        }
        return todo;
    }
    async update(todo_id, updateTodo, user_id) {
        const todo = await this.findOne(todo_id, user_id);
        const [numberOfAffectedRows, [updateResult]] = await this.todoRepository.update({ ...todo['dataValues'], ...updateTodo }, { where: { todo_id, user_id }, returning: true });
        return updateResult;
    }
    async delete(todo_id, user_id) {
        return await this.todoRepository.destroy({ where: { todo_id, user_id } });
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Todo_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], TodosService);
//# sourceMappingURL=todos.service.js.map
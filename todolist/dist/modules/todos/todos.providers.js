"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoProviders = void 0;
const todos_entity_1 = require("./todos.entity");
const constants_1 = require("../../core/constants");
exports.todoProviders = [{
        provide: constants_1.Todo_REPOSITORY,
        useValue: todos_entity_1.Todo,
    }];
//# sourceMappingURL=todos.providers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const todos_dto_1 = require("./todos.dto");
class UpdateTodoDto extends (0, mapped_types_1.PartialType)(todos_dto_1.TodoDto) {
}
exports.UpdateTodoDto = UpdateTodoDto;
//# sourceMappingURL=updatatodo.dto.js.map
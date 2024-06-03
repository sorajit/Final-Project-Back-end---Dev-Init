"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const event_dto_1 = require("./event.dto");
class UpdateEventDto extends (0, mapped_types_1.PartialType)(event_dto_1.EventDto) {
}
exports.UpdateEventDto = UpdateEventDto;
//# sourceMappingURL=updateevent.dto.js.map
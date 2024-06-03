"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logProviders = void 0;
const log_entity_1 = require("./log.entity");
const constants_1 = require("../../core/constants");
exports.logProviders = [{
        provide: constants_1.Log_REPOSITORY,
        useValue: log_entity_1.Log,
    }];
//# sourceMappingURL=log.providers.js.map
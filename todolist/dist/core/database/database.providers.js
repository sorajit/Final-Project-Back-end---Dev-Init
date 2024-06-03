"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../constants");
const user_entity_1 = require("../../modules/users/user.entity");
const log_entity_1 = require("../../modules/log/log.entity");
const todos_entity_1 = require("../../modules/todos/todos.entity");
const events_entity_1 = require("../../modules/events/events.entity");
exports.databaseProviders = [{
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize(process.env.DB_URL, {
                dialect: 'postgres',
            });
            sequelize.addModels([user_entity_1.User, log_entity_1.Log, todos_entity_1.Todo, events_entity_1.Event]);
            await sequelize.sync();
            return sequelize;
        },
    }];
//# sourceMappingURL=database.providers.js.map
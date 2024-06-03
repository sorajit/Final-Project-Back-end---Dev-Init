import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE} from '../constants';
import { User } from '../../modules/users/user.entity';
import { Log } from 'src/modules/log/log.entity';
import { Todo } from 'src/modules/todos/todos.entity';
import { Event } from 'src/modules/events/events.entity';
export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        const sequelize = new Sequelize(process.env.DB_URL,{
            dialect: 'postgres',
        });
        sequelize.addModels([User, Log, Todo, Event]);
        await sequelize.sync();
        return sequelize;
    },
}];
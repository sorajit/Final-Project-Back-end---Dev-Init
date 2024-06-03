import { Log } from './log.entity';
import { Log_REPOSITORY } from '../../core/constants';

export const logProviders = [{
    provide: Log_REPOSITORY,
    useValue: Log,
}];
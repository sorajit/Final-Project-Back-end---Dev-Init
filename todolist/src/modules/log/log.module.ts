import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { logProviders } from './log.providers';
@Module({
  providers: [LogService,...logProviders],
  controllers: [LogController]
})
export class LogModule {}

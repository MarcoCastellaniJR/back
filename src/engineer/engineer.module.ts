import { Module } from '@nestjs/common';
import { EngineerService } from './engineer.service';
import { EngineerController } from './engineer.controller';

@Module({
  controllers: [EngineerController],
  providers: [EngineerService],
})
export class EngineerModule {}

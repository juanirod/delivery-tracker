import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { DriversModule } from 'src/drivers/drivers.module';

@Module({
  imports: [DriversModule],
  providers: [DeliveriesService],
  exports: [DeliveriesService],
  controllers: [DeliveriesController],
})
export class DeliveriesModule {}

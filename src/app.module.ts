import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OrdersModule } from './orders/orders.module';
import { EventsModule } from './events/events.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { DriversModule } from './drivers/drivers.module';
@Module({
  imports: [EventEmitterModule.forRoot(), OrdersModule, EventsModule, DeliveriesModule, DriversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

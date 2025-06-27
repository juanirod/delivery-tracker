import { Module } from '@nestjs/common';
import { OrderCreatedListener } from './listeners/order/order-created.listener';

@Module({
  providers: [OrderCreatedListener]
})
export class EventsModule { }

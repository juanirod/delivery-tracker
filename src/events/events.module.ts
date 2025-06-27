import { Module } from '@nestjs/common';
import { OrderCreatedListener } from './listeners/order/order-created.listener';
import { OrderCreatedToDeliveryListener } from './listeners/delivery/order-created-to-delivery.listener';
import { DeliveriesModule } from 'src/deliveries/deliveries.module';
import { DriverAvailableListener } from './listeners/driver/driver-available.listener';
import { DeliveryAssignedListener } from './listeners/delivery/delivery-assigned.listener';
import { DeliveryPendingListener } from './listeners/delivery/delivery-pending.listener';
import { DeliveryPickedUpListener } from './listeners/delivery/delivery-pickedup.listener';
import { DeliveryCompletedListener } from './listeners/delivery/delivery-completed.liestener';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [DeliveriesModule, NotificationsModule], // 👈 necesario
  providers: [
    OrderCreatedListener,
    OrderCreatedToDeliveryListener,
    DriverAvailableListener,
    DeliveryAssignedListener,
    DeliveryPendingListener,
    DeliveryPickedUpListener,
    DeliveryCompletedListener
  ],
})
export class EventsModule { }

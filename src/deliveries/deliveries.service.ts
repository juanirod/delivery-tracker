import { Injectable } from '@nestjs/common';
import { Delivery } from './entities/delivery.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Order } from 'src/orders/entities/order.entity';
import { v4 as uuidv4 } from 'uuid';
import { DriversService } from 'src/drivers/drivers.service';

@Injectable()
export class DeliveriesService {
    private deliveries: Delivery[] = [];

    constructor(
        private eventEmitter: EventEmitter2,
        private driversService: DriversService
    ) { }

    assignDriver(order: Order): Delivery  {

        const driver = this.driversService.findAvailable();

        const delivery = new Delivery(
            uuidv4(),
            order.id,
            driver ?? null,
            driver ? 'assigned' : 'pending_driver',
        );
        this.deliveries.push(delivery);

        if (driver) {
            this.driversService.markAsBusy(driver.id);
            this.eventEmitter.emit('delivery.assigned', delivery);
        } else {
            this.eventEmitter.emit('delivery.pending', delivery);
        }

        return delivery;

    }

    pickupDelivery(deliveryId: string): Delivery {
        const delivery = this.deliveries.find(d => d.id === deliveryId);
        if (!delivery) throw new Error('Entrega no encontrada');

        delivery.status = 'picked_up';
        this.eventEmitter.emit('delivery.picked_up', delivery);
        return delivery;
    }


    completeDelivery(deliveryId: string) {
        const delivery = this.deliveries.find((d) => d.id === deliveryId);
        if (!delivery) throw new Error('Entrega no encontrada');

        delivery.status = 'delivered';
        this.eventEmitter.emit('delivery.delivered', delivery);
        this.driversService.markAsAvailable(delivery.driver?.id!);

        this.eventEmitter.emit('driver.available', delivery.driver);

        return delivery;
    }

    findPending(): Delivery[] {
        return this.deliveries.filter((d) => d.status === 'pending_driver');
    }

    emitAssigned(delivery: Delivery) {
        this.eventEmitter.emit('delivery.assigned', delivery);
    }

    markDriverBusy(driverId: string) {
        this.driversService.markAsBusy(driverId);
    }

    findAllDeliveries(): Delivery[] {
        return this.deliveries;
    }
}
